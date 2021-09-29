import React, { useState } from "react";
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { newPoint } from "../http/pointsApi";
import "../styles/App.css"

const InputForm = ({ create }) => {

  const [newCell, setNewCell] = useState({})
  const addNewTableCell = (e) => {
    e.preventDefault();

    newPoint(newCell).then(data => setNewCell(data))
    console.log('points-', newCell);

    create(newCell)
    setNewCell({ date: "", title: "", quantity: "", distance: "" })

  }

  return (
    <form action="/api" method="post">
      <MyInput
        type="text"
        value={newCell.date}
        onChange={(e) => setNewCell({ ...newCell, date: e.target.value })}
        placeholder="Дата"
      />
      <MyInput
        type="text"
        value={newCell.title}
        onChange={(e) => setNewCell({ ...newCell, title: e.target.value })}
        placeholder="Название"
      />
      <MyInput
        type="text"
        value={newCell.quantity}
        onChange={(e) => setNewCell({ ...newCell, quantity: e.target.value })}
        placeholder="Количество"
      />
      <MyInput
        type="text"
        value={newCell.distance}
        onChange={(e) => setNewCell({ ...newCell, distance: e.target.value })}
        placeholder="Расстояние"
      />
      <MyButton onClick={addNewTableCell}>Добавить</MyButton>
    </form>
  );
};

export default InputForm;
