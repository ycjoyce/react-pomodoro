import React, { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import connect from "../../apis/connect";
import useInit from "../../hooks/useInit";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { createTask, updateTask, removeTask } from "../../store/reducers/task";
import { Record, fetchRecordsOfDate } from "../../store/reducers/record";
import theme from "../../styles/abstracts/theme";
import TimerSection from "../TimerSection/TimerSection";
import OperateSection from "../OperateSection/OperateSection";
import OperateRoutes from "../OperateRoutes/OperateRoutes";
import { PageButtonProps } from "../PageButton/PageButton";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import StyledApp, { StyledTimer, StyledOperate } from "./App.style";
import useFetchRecords from "../../hooks/useFetchRecords";

const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { token, tasks, records } = useAppSelector((state) => {
    return {
      token: state.token.value,
      tasks: state.tasks.value,
      records: state.records.dates,
    };
  });

  useInit();

  const [modal, setModal] = useState<"task-success" | "task-fail" | "">("");

  const generatePage = (page: PageButtonProps["page"]) => ({
    page,
    active:
      // 如果 page not found 則顯示 add 頁面
      !["/add", "/list", "/analysis", "/ringtone"].includes(
        location.pathname
      ) && page === "add"
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

  const getTomato = useFetchRecords();

  // useEffect(() => {
  //   console.log(getTomato);
  // }, [getTomato]);

  return (
    <>
      <StyledApp>
        <StyledTimer backgroundColor="#eaeaea">
          <TimerSection />
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
              getTomato={getTomato}
              onSaveNewTask={handleSaveNewTask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onRedoTask={handleRedoTask}
            />
          </OperateSection>
        </StyledOperate>
      </StyledApp>

      {modal.startsWith("task") && (
        <AddTaskModal
          success={modal === "task-success"}
          onClose={() => setModal("")}
        />
      )}
    </>
  );
};

export default App;
