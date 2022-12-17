import TodoItem from "../components/todo-item";
import TodoAdd from "../components/todo-add";
import { useState } from "react";

const Todolist = () => {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {list.map((item, index) => (
          <TodoItem
            key={item.id}
            item={item}
            index={index}
            list={list}
            setList={setList}
            setChecked={setChecked}
          />
        ))}
      </ul>
      <TodoAdd list={list} setList={setList} checked={checked} />
    </>
  );
};

export default Todolist;
