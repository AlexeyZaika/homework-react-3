import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Название теста</th>
          <th>Исполнитель</th>
          <th>Проверяющий</th>
          <th>Дата открытия</th>
          <th>Срок выполнения</th>
        </tr>
      </thead>
      <tbody>
        {props.valueTable.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.executor}</td>
              <td>{row.checking}</td>
              <td>{row.date}</td>
              <td>{row.term}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  valueTable: PropTypes.array.isRequired,
}

export default Table;

