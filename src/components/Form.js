import React from 'react';
import "../style/Form.css";

const Form = props => {
  return (
    <>
      <h1>Weather App</h1>
      <form className="form" onSubmit={props.submit}>
        <input type="text"
          value={props.value}
          placeholder="Enter city name"
          onChange={props.change}
        />
        <button>Search city</button>
      </form>
    </>
  )
}

export default Form;