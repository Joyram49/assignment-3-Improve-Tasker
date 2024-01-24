import { useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskContainer from "./components/tasks/TaskContainer.jsx";
import { TaskContext } from "./context";
import { initialState, taskReducer } from "./reducers/taskReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <Header />
      <HeroSection />
      <TaskContainer />
      <Footer />
      <ToastContainer />
    </TaskContext.Provider>
  );
}
