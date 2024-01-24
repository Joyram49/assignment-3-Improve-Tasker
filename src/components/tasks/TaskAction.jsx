import { useState } from "react";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";
import SearchBox from "./SearchBox";

export default function TaskAction({ onAddClick, dispatch, tasks = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  // handle delete all task
  const deleteAllTask = (isDelete) => {
    if (isDelete) {
      dispatch({ type: "DELETE_ALL_TASK" });
      toast.success("successfully deleted all task", {
        position: "bottom-right",
      });
    }
    setIsOpen(false);
  };

  // handle delete all btn click
  const handleDeleteAllBtnClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && (
        <div className='fixed top-2 left-1/2 -translate-x-1/2 z-50 backdrop-blur-sm shadow-md'>
          <DeleteModal
            message='This command will delete all tasks. Are you sure?'
            onDeleteTasks={deleteAllTask}
          />
        </div>
      )}
      <div className='flex items-center space-x-5'>
        <SearchBox dispatch={dispatch} />
        <button
          className='rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold'
          onClick={onAddClick}
        >
          Add Task
        </button>
        <button
          className={`rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold ${
            tasks.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleDeleteAllBtnClick}
          disabled={tasks.length === 0}
          title={tasks.length === 0 ? "There is no task found!!" : ""}
        >
          Delete All
        </button>
      </div>
    </>
  );
}
