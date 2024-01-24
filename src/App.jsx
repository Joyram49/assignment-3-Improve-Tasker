import { useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskContainer from "./components/tasks/TaskContainer.jsx";
import { SearchedContext, TaskContext } from "./context";
import { initialState, taskReducer } from "./reducers/taskReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <Header />
      <HeroSection />
      <SearchedContext.Provider value={{ setSearchTerm, searchTerm }}>
        <TaskContainer />
      </SearchedContext.Provider>
      <Footer />
      <ToastContainer />
    </TaskContext.Provider>
  );
}
