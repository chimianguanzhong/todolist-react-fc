import { useState } from "react";
import { nanoid } from "nanoid";

const TodoAdd = ({ list, setList, checked }) => {
  // list 和 setList 是在父组件维护的状态
  const [newListItem, setNewListItem] = useState(""); // 这个state用于获取input的值，即设置受控组件

  // 获取用户input输入
  const handleNewListItem = (e) => {
    setNewListItem(e.target.value);
  };

  // 将用户输入显示出来
  const handleItemAdd = () => {
    setList([
      ...list, // 这个写法的意思是把list复制出来一份，再拼接上新的内容
      {
        id: nanoid(),
        item: newListItem,
        Checked: checked,
      },
    ]);
    setNewListItem("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="添加一条todo"
        value={newListItem}
        onChange={handleNewListItem}
      />
      <button onClick={handleItemAdd}>添加</button>
    </>
  );
};

export default TodoAdd;
