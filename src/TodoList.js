import todolist from "./todolist.svg";
import { useState } from "react";
const TodoList = () => {
  const [inputData, setInputData] = useState("");
  var [items, setItems] = useState([]);
  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src={todolist} alt="todologo" />
          <figcaption>add your list here✌</figcaption>
        </figure>

        <div className="add-items">
          <input
            type="text"
            placeholder="✍ add items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="buton" onClick={addItems}>
            add Item
          </button>
        </div>

        <div className="show-item">
          {items.map((elem, ind) => {
            return (
              <div className="each-item" key={ind}>
                <h3>{elem}</h3>
                <button className="btn buton" onClick={() => deleteItem(ind)}>
                  delete
                </button>
              </div>
            );
          })}
        </div>

        <div className="show-item">
          <button className="buton" onClick={() => setItems([])}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
