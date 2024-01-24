import { getData } from "../data/db";

const tasks = getData();
const initialState = {
  tasks,
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "DELETE_ALL_TASK":
      return {
        ...state,
        tasks: state.tasks.slice(0, 0),
      };
    // case "SEARCH_TASK":
    //   const searchText = action.payload.trim();
    //   const nextTasks = state.tasks.filter((task) =>
    //     task.title.toLowerCase().includes(searchText.toLowerCase())
    //   );
    //   const nextState = { ...state, tasks: [...nextTasks] };
    //   return searchText === "" ? initialState : nextState;

    case "TOGGLE_FAVOURITE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isFavourite: !task.isFavourite,
            };
          } else {
            return task;
          }
        }),
      };

    default:
      console.error(`Unhandled action type: ${action.type}`);
      return state;
  }
}

export { initialState, taskReducer };
