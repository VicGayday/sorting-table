import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MySelect from '../components/UI/select/MySelect'

const SortCells = ({ filter, setFilter }) => {
  return (
    <div>
      <MySelect
        disabled={false}
        value={filter.sort}
        onChange={(item) => setFilter({ ...filter, sort: item, condition: '', query: '' })}
        defaultValue="Выбор колонки"
        options={[
          { value: "", name: "" },
          { value: "title", name: "Наименование" },
          { value: "quantity", name: "Количество" },
          { value: "distance", name: "Расстояние" },
        ]}
      />
      {filter.sort === "title"
        ? <MySelect
          disabled={false}
          value={filter.condition}
          onChange={(item) => setFilter({ ...filter, condition: item })}
          defaultValue="Выбор условия"
          options={[
            { value: "", name: "" },
            { value: "equals", name: "Равно" },
            { value: "contains", name: "Содержит" },
            { value: "more", name: "Больше" },
            { value: "less", name: "Меньше" },
          ]}
        />
        : <MySelect
          disabled={false}
          value={filter.condition}
          onChange={(item) => setFilter({ ...filter, condition: item })}
          defaultValue="Выбор условия"
          options={[
            { value: "", name: "" },
            { value: "equals", name: "Равно" },
            // { value: "contains", name: "Содержит" },
            { value: "more", name: "Больше" },
            { value: "less", name: "Меньше" },
          ]}
        />
      }
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Введите критерий для выбора"
      />
      </div>
  )
}

export default SortCells