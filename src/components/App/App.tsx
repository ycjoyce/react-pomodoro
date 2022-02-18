import React, { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import connect from "../../apis/connect";
import useInit from "../../hooks/useInit";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  createTask,
  updateTask,
  removeTask,
  Record,
} from "../../store/reducers/task";
import theme from "../../styles/abstracts/theme";
import TimerSection from "../TimerSection/TimerSection";
import OperateSection from "../OperateSection/OperateSection";
import OperateRoutes from "../OperateRoutes/OperateRoutes";
import { PageButtonProps } from "../PageButton/PageButton";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import StyledApp, { StyledTimer, StyledOperate } from "./App.style";

const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.value);

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

  const getTomato = async (date: Date) => {
    //     const year = date.getFullYear();
    //     const month = date.getMonth() + 1;
    //     const day = date.getDate();
    //
    //     const { data } = await connect({
    //       path: `/records?date=${year}-${month}-${day}`,
    //     });
    //
    //     let count = 0;
    //
    //     data.forEach((record: Record) => (count += record.count));
    //
    //     return count;
    return 0;
  };

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
              getTomato={() => 0}
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
