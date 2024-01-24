import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../../context";
import DeleteModal from "./DeleteModal";
import TagItem from "./TagItem";

export default function TaskItem({ data, onEditClick }) {
  const { id, title, description, priority, tags, isFavourite } = data || {};

  const [isOpen, setIsOpen] = useState(false);

  const { dispatch } = useContext(TaskContext);

  // handle toggle favourite task
  const onFav = (id) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: id });
  };

  // handle delete task
  const deleteTask = (isDelete) => {
    if (isDelete) {
      dispatch({ type: "DELETE_TASK", payload: id });
      toast.success("successfully deleted the task", {
        position: "bottom-right",
      });
    }
    setIsOpen(false);
  };

  // handle delete task btn click

  const handleDeleteBtnClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <tr className='fixed top-2 left-1/2 -translate-x-1/2 z-50 backdrop-blur-sm shadow-md'>
          <DeleteModal
            message='This command will delete the task. Are you sure?'
            onDeleteTasks={deleteTask}
          />
        </tr>
      )}

      <tr className='border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2'>
        <td>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-star cursor-pointer'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke={isFavourite ? "yellow" : "gray"}
            fill={isFavourite ? "yellow" : "gray"}
            strokeLinecap='round'
            strokeLinejoin='round'
            onClick={() => onFav(id)}
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
          </svg>
        </td>
        <td>{title}</td>
        <td>
          <div>{description}</div>
        </td>
        <td>
          <ul className='flex justify-center gap-1.5 flex-wrap'>
            {tags.map((tag, index) => (
              <TagItem key={index + tag} tag={tag} />
            ))}
          </ul>
        </td>
        <td className='text-center'>{priority}</td>
        <td>
          <div className='flex items-center justify-center space-x-3'>
            <button className='text-red-500' onClick={handleDeleteBtnClick}>
              Delete
            </button>
            <button className='text-blue-500' onClick={() => onEditClick(data)}>
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
