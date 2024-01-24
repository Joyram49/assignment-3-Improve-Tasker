import { useState } from "react";
import { findEmptyProperty } from "../../utils/findeEmptryProperties";

export default function AddOrEditModal({ onCloseModal, onSave, taskToUpdate }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavourite: false,
    }
  );

  const [errors, setErrors] = useState({});

  let isAdd = Object.is(taskToUpdate, null);

  const handleInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));

    // Clear the error message for the changed input field
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyProperties = findEmptyProperty(task);

    // Check for errors
    // const nextError = emptyProperties.map((property) => {
    //   let errorKeys = Object.keys(errors);
    //   if (errorKeys.includes(property)) {
    //     return { property, errorMsg: `${property} is required` };
    //   }
    // });

    if (Object.keys(emptyProperties).length > 0) {
      // Display an error message or handle accordingly
      setErrors({ ...emptyProperties });
    } else {
      // No errors, proceed with saving data
      onSave(isAdd, task);
    }
  };

  return (
    <>
      <div className='bg-black bg-opacity-70 h-full w-full z-10 fixed top-0 left-0'></div>
      <form
        className='mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/4 2xl:left-1/3'
        onSubmit={handleSubmit}
      >
        <h2 className='mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]'>
          {isAdd ? "Create New Task" : "Update The Task"}
        </h2>

        <div className='space-y-9 text-white lg:space-y-10'>
          <div className='space-y-2 lg:space-y-3'>
            <label htmlFor='title'>Title</label>
            <input
              className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
              type='text'
              name='title'
              id='title'
              value={task.title}
              onChange={handleInputChange}
            />
            {errors.title && (
              <span className='text-center font-medium text-sm text-red-500'>
                {errors.title}
              </span>
            )}
          </div>
          <div className='space-y-2 lg:space-y-3'>
            <label htmlFor='description'>Description</label>
            <textarea
              className='block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]'
              type='text'
              name='description'
              id='description'
              value={task.description}
              onChange={handleInputChange}
            ></textarea>
            {errors.description && (
              <span className='text-center font-medium text-sm text-red-500 mt-2'>
                {errors.description}
              </span>
            )}
          </div>
          <div className='grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20'>
            <div className='space-y-2 lg:space-y-3'>
              <label htmlFor='tags'>Tags</label>
              <input
                className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
                type='text'
                name='tags'
                id='tags'
                value={task.tags}
                onChange={handleInputChange}
              />
              {errors.tags && (
                <span className='text-center font-medium text-sm text-red-500'>
                  {errors.tags}
                </span>
              )}
            </div>

            <div className='space-y-2 lg:space-y-3'>
              <label htmlFor='priority'>Priority</label>
              <select
                className='block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5'
                name='priority'
                id='priority'
                value={task.priority}
                onChange={handleInputChange}
              >
                <option value=''>Select Priority</option>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
              {errors.priority && (
                <span className='text-center font-medium text-sm text-red-500'>
                  {errors.priority}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className='mt-16 flex justify-center lg:mt-20 space-x-6'>
          <button
            type='submit'
            className='rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80'
          >
            Submit
          </button>
          <button
            type='button'
            className='rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80'
            onClick={onCloseModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
