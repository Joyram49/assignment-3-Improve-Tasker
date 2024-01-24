import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../../context";
import NoTaskFound from "../NoTaskFound";
import AddOrEditModal from "./AddOrEditModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskContainer() {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const {
    state: { tasks },
    dispatch,
  } = useContext(TaskContext);

  //  add or delete task handler function
  const handleAddOrEditTask = (isAdd, task) => {
    if (isAdd) {
      dispatch({
        type: "ADD_TASK",
        payload: task,
      });
      toast.success("successfully added new task", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: task,
      });
      toast.success("successfully edited the task", {
        position: "bottom-right",
      });
    }
    handleCloseModal();
  };

  // handle function on click edit button
  const handleEditClick = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  // handle function on click add button
  const handleCloseModal = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };
  return (
    <section className='mb-20' id='tasks'>
      {showModal && (
        <AddOrEditModal
          onCloseModal={handleCloseModal}
          onSave={handleAddOrEditTask}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className='container'>
        <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
          <div className='mb-14 items-center justify-between sm:flex'>
            <h2 className='text-2xl font-semibold max-sm:mb-4'>Your Tasks</h2>
            <TaskAction
              onAddClick={() => setShowModal(true)}
              dispatch={dispatch}
              tasks={tasks}
            />
          </div>
          {tasks.length === 0 ? (
            <NoTaskFound />
          ) : (
            <TaskList tasks={tasks} onEditClick={handleEditClick} />
          )}
        </div>
      </div>
    </section>
  );
}
