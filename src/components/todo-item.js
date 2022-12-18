import { useState } from "react";

// 接收props的简写方式
const TodoItem = ({ list, setList, item, index, setChecked }) => {
  const [isCheck, setIsCheck] = useState(false); // 用于获取checked的中间状态
  // 删除按钮的点击事件
  const handleDelete = () => {
    const newList = [...list]; // 注意不能直接修改props，要浅拷贝一份出来
    newList.splice(index, 1); // 操作新的数组
    setList(newList); // 将新的状态（数组）传给父组件（setList是维护父组件state的方法）
  };
  // input控件必需的onchange事件
  const handleChange = (e) => {
    setIsCheck(e.target.checked); // 更新isCheck的值，实现表单数据的双向绑定
    setChecked(isCheck); // 将isCheck的状态同步给父组件
  };

  return (
    <li style={{ listStyle: "none" }}>
      {/* 将isCheck和checked绑定 */}
      <input type="checkbox" checked={isCheck} onChange={handleChange} />
      <span style={{ textDecorationLine: isCheck ? "line-through" : "none" }}>
        {item.item}
      </span>
      <button onClick={handleDelete}>删除</button>
    </li>
  );
};

export default TodoItem;
