import React, { FC, useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInit from "../../hooks/useInit";
import useFetchRecords from "../../hooks/useFetchRecords";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { createTask, updateTask, removeTask } from "../../store/reducers/task";
import {
  saveCheckedRingtone,
  RingtoneState,
} from "../../store/reducers/ringtone";
import { saveRecordOfDate } from "../../store/reducers/record";
import connect from "../../apis/connect";
import { dateKey } from "../../utils/convert";
import theme from "../../styles/abstracts/theme";
import TimerSection from "../TimerSection/TimerSection";
import OperateSection from "../OperateSection/OperateSection";
import OperateRoutes from "../OperateRoutes/OperateRoutes";
import { PageButtonProps } from "../PageButton/PageButton";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import StyledApp, { StyledTimer, StyledOperate } from "./App.style";
import { WorkType } from "../Ringtone/Ringtone";
import { paths } from "../OperateRoutes/OperateRoutes";

const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  // 使用者登入、取得 token 及鈴聲
  useInit();

  const {
    tasks,
    ringtones: { ringtones, checked: checkedRingtones },
    // ringtones: 資料庫所有鈴聲資料
    // checkedRingtones: 使用者選擇的鈴聲 id
  } = useAppSelector((state) => {
    return {
      token: state.token.value,
      tasks: state.tasks.value,
      records: state.records.dates,
      ringtones: state.ringtones,
    };
  });

  /**
   * 要顯示的跳窗內容
   * task-success: 案件儲存成功
   * task-fail: 案件儲存失敗
   * "": 不顯示跳窗
   */
  const [modal, setModal] = useState<"task-success" | "task-fail" | "">("");

  // 使用者選擇的鈴聲 url
  const [ringtoneSources, setRingtoneSources] = useState<
    RingtoneState["checked"]
  >({ work: "", break: "" });

  useEffect(() => {
    const work =
      ringtones.work.find((r) => r.id === checkedRingtones.work)?.ringtone ||
      "";
    const breaktime =
      ringtones.break.find((r) => r.id === checkedRingtones.break)?.ringtone ||
      "";
    setRingtoneSources({ work, break: breaktime });
  }, [checkedRingtones, ringtones]);

  const incompletedTasks = useMemo(() => {
    return tasks.filter((task) => !task.done);
  }, [tasks]);

  /**
   * 產生操控面板的分頁按鈕 config
   * @param page
   * @returns
   */
  const generatePage = (page: PageButtonProps["page"]) => ({
    page,
    active:
      // 如果 page not found 則顯示 add 頁面
      !Object.values(paths).includes(location.pathname) && page === "add"
        ? true
        : location.pathname.substring(1) === page,
    onClick() {
      navigate(`/${page}`);
    },
  });

  const handleSaveNewTask = (title: string, tomato: number) => {
    if (!title || !tomato) {
      setModal("task-fail");
      return;
    }
    dispatch(createTask({ title, length: tomato }));
    setModal("task-success");
  };

  const handleEditTask = (id: string, title: string, tomato: number) => {
    dispatch(updateTask({ id, title, length: tomato }));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleRedoTask = (id: string) => {
    dispatch(updateTask({ id, completed: false }));
  };

  const handleTaskComplete = async (id: string) => {
    await dispatch(updateTask({ id, completed: true }));
  };

  const handleSelectRingtone = (type: WorkType, id: string) => {
    dispatch(saveCheckedRingtone({ type, id }));
  };

  const handleAddRecord = async (id: string, count: number) => {
    // 新增到資料庫
    const { data: record } = await connect({
      path: "/records",
      type: "post",
      data: {
        task: id,
        count,
      },
    });
    // 更新 store
    dispatch(saveRecordOfDate({ date: dateKey(new Date()), record }));
  };

  /**
   * 取得目標日的紀錄數目的方法
   */
  const getTomato = useFetchRecords();

  return (
    <>
      <StyledApp>
        <StyledTimer backgroundColor="#eaeaea">
          <TimerSection
            tomatoUnitTime={5}
            task={incompletedTasks[0]}
            ringtones={ringtoneSources}
            onTaskComplete={handleTaskComplete}
            onAddRecord={handleAddRecord}
          />
        </StyledTimer>

        <StyledOperate backgroundColor={theme.color.black}>
          <OperateSection
            pages={[
              generatePage("add"),
              generatePage("list"),
              generatePage("analysis"),
              generatePage("ringtone"),
            ]}
          >
            <OperateRoutes
              tasks={tasks}
              ringtones={ringtones}
              checkedRingtone={checkedRingtones}
              getTomato={getTomato}
              onSaveNewTask={handleSaveNewTask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onRedoTask={handleRedoTask}
              onSelectRingtone={handleSelectRingtone}
            />
          </OperateSection>
        </StyledOperate>
      </StyledApp>

      {modal.startsWith("task") && (
        <AddTaskModal
          root="modal-root"
          success={modal === "task-success"}
          onClose={() => setModal("")}
        />
      )}
    </>
  );
};

export default App;
