import { useState } from "react";
import { nanoid } from "nanoid";

const TodoAdd = ({ list, setList, checked }) => {
  // list 和 setList 是在父组件维护的状态
  const [newListItem, setNewListItem] = useState(""); // 这个state用于获取input的值，即设置受控组件

  // onchange事件的回调，用于获取用户input输入
  const handleNewListItem = (e) => {
    setNewListItem(e.target.value);
  };

  // 按下回车键新增内容
  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return; // 如果用户按的不是enter，则程序结束
    if (e.target.value.trim() === "") {
      // 如果用户没有输入内容，则程序结束
      alert("您还没有输入内容"); // 提醒用户输入内容
      return;
    }
    setList([
      // 主要逻辑
      ...list,
      {
        id: nanoid(),
        item: newListItem,
        Checked: checked,
      },
    ]);
    setNewListItem("");
  };

  // 点击添加按钮新增内容
  const handleItemAdd = () => {
    if (newListItem === "") {
      alert("您还没有输入内容");
      return;
    }
    setList([
      ...list, // 将用户输入拼接到list数组里面。这个写法的意思是把list复制出来一份，再拼接上新的内容
      {
        id: nanoid(),
        item: newListItem,
        Checked: checked,
      },
    ]);
    setNewListItem(""); // 新增完成后将input清空
  };
  return (
    <>
      <input
        type="text"
        placeholder="添加一条todo"
        value={newListItem}
        onChange={handleNewListItem}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleItemAdd}>添加</button>
    </>
  );
};

export default TodoAdd;
