
import { useContext } from "react";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
// import { BiMessageAdd } from 'react-icons/bi';

function AddTodo() {
    const {addNewItem} = useContext(TodoItemsContext);
    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();

    const handleNameChange = (event) => {
      setTodoName(event.target.value);
    };

    const handleDateChange = (event) => {
      setDueDate(event.target.value);
    };

    const handleAddButtonClicked = (event) => {
      event.preventDefault();
      addNewItem(todoName, dueDate);
      setDueDate("");
      setTodoName("");
    };

    return (
      <div className="container text-center">
        <form className="row kg-row"
        onSubmit={handleAddButtonClicked} >
          <div className="col-6">
          <input type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={handleNameChange}/>
          </div>
          <div className="col-4">
          <input type="date"
           value={dueDate}
           onChange={handleDateChange}
          />
          </div>
          <div className="col-2">
          <button 
          type="submit"
          className="btn btn-success kg-button">Add
          </button>
          </div>
       </form>
     </div>
  );
}

export default AddTodo; 