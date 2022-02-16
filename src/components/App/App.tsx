import React, { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import theme from "../../styles/abstracts/theme";
import TimerSection from "../TimerSection/TimerSection";
import OperateSection from "../OperateSection/OperateSection";
import OperateRoutes from "../OperateRoutes/OperateRoutes";
import StyledApp, { StyledTimer, StyledOperate } from "./App.style";
import { PageButtonProps } from "../PageButton/PageButton";
import Modal from "../Modal/Modal";

const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [modal, setModal] = useState("");

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
    setModal("task-success");
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
            <OperateRoutes tasks={[]} onSaveNewTask={handleSaveNewTask} />
          </OperateSection>
        </StyledOperate>
      </StyledApp>

      {modal === "task-fail" && (
        <Modal onClose={() => setModal("")}>fail</Modal>
      )}
      {modal === "task-success" && (
        <Modal onClose={() => setModal("")}>success</Modal>
      )}
    </>
  );
};

export default App;
