import React, { useState } from 'react'
import '../styles/App.css';

const Table = ({ tableCells, currentPage }) => {
  const [cellsPerPage] = useState(10)

  return (
    <div className="wrapper">
      <h1>Список данных</h1>
      <div className="table">
        <div className="row">
          <div className="box">NN</div>
          <div className="box">Дата</div>
          <div className="box">Наименование</div>
          <div className="box">Количество</div>
          <div className="box">Расстояние</div>
        </div>

        {tableCells.map((it, index) => {
          return (
            <div key={index + 1} className="row">
              <div className="box">{(index + 1) + cellsPerPage * (currentPage - 1)}</div>
              <div className="box">{it.date}</div>
              <div className="box">{it.title}</div>
              <div className="box">{it.quantity}</div>
              <div className="box">{it.distance}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Table;