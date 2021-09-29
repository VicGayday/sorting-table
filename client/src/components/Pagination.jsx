import React from 'react'
import '../styles/App.css'

const Pagination = ({ cellsPerPage, totalCells, currentPage, setCurrentPage }) => {

  const pageNumbers = new Array(Math.ceil(totalCells / cellsPerPage))
    .fill(null).map((it, index) => {
      return index + 1
    })

    if (currentPage > Math.ceil(totalCells / cellsPerPage)) {
      setCurrentPage(1)
    }


  return (
    <div className="pagination__wrap">
      {pageNumbers.map((it) => (
        <span
          className={currentPage === it ? "pagination page__current" : "pagination"}
          key={it}
          onClick={() => setCurrentPage(it)}
        >
          {it}
        </span>
      ))}
    </div>
  );
}

export default Pagination
