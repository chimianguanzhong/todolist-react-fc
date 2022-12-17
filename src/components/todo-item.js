import { useState } from "react";

const TodoItem = ({ list, setList, item, index, setChecked }) => {
  const [isCheck, setIsCheck] = useState(false);
  const handleDelete = () => {
    const newList = [...list]; // 注意不能直接修改props，要浅拷贝一份出来
    newList.splice(index, 1); // 操作新的数组
    setList(newList); // 将新的状态（数组）传给父组件（setList是维护父组件state的方法）
  };
  const handleChange = (e) => {
    setIsCheck(e.target.checked);
    setChecked(isCheck);
  };

  return (
    <li style={{ listStyle: "none" }}>
      <input type="checkbox" checked={isCheck} onChange={handleChange} />
      <span style={{ textDecorationLine: isCheck ? "line-through" : "none" }}>
        {item.item}
      </span>
      <button onClick={handleDelete}>删除</button>
    </li>
  );
};

export default TodoItem;
