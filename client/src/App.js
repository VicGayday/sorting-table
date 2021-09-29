import React, { useState, useMemo, useEffect } from 'react'
import './styles/App.css'
import Table from './components/Table'
import InputForm from './components/InputForm'
import SortCells from './components/SortCells';
import Pagination from './components/Pagination.jsx'
import { fetchPoints } from './http/pointsApi'

function App() {
  const [tableCells, setTableCells] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '', condition: '' })
  const [cellsPerPage] = useState(process.env.REACT_APP_CELLS_PER_PAGE)
  const [currentPage, setCurrentPage] = useState(1)

  const sortedCells = useMemo(() => {
    return filter.sort
      ? [...tableCells].sort((a, b) => a[filter.sort] >= b[filter.sort])
      : tableCells;
  }, [filter.sort, tableCells])

  const conditionCells = useMemo(() => {
    console.log('fil-', filter.sort, filter.condition, filter.query);
    switch (filter.condition) {
      case ("equals"):
        return [...sortedCells].filter(item => item[filter.sort] == filter.query)   //использование нечеткого равенста для приведения типов
      case ("contains"):
        return [...sortedCells].filter(item => item[filter.sort].includes(filter.query))
      case ("more"):
        return [...sortedCells].filter(item => item[filter.sort] > filter.query)
      case ("less"):
        return [...sortedCells].filter(item => item[filter.sort] < filter.query)
      default:
        return sortedCells
    }

  }, [filter, sortedCells])

  const createNewCell = (newCell) => {
    setTableCells([...tableCells, newCell])
  }

  const lastCellIndex = currentPage * cellsPerPage
  const firstCellIndex = lastCellIndex - cellsPerPage
  console.log('appIndex', lastCellIndex, firstCellIndex);
  const currentCell = conditionCells.slice(firstCellIndex, lastCellIndex)

  useEffect(() => {
    fetchPoints().then(data => setTableCells(data))
  }, [])

  return (
    <div className="App">
      <InputForm create={createNewCell} />
      <SortCells filter={filter} setFilter={setFilter} />
      <Table tableCells={currentCell} currentPage={currentPage} />
      <Pagination
        cellsPerPage={cellsPerPage}
        totalCells={conditionCells.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
