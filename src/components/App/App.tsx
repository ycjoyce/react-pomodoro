import React, { FC, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { machineId } from "node-machine-id";
import { DeviceUUID } from "device-uuid";
import theme from "../../styles/abstracts/theme";
import TimerSection from "../TimerSection/TimerSection";
import OperateSection from "../OperateSection/OperateSection";
import OperateRoutes from "../OperateRoutes/OperateRoutes";
import { PageButtonProps } from "../PageButton/PageButton";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import StyledApp, { StyledTimer, StyledOperate } from "./App.style";
import login from "../../utils/login";

const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    setModal("task-success");
  };

  useEffect(() => {
    login(new DeviceUUID().get())
      .then((token) => console.log(token))
      .catch((e) => console.error("ERROR", e));
  }, []);

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
