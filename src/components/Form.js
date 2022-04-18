import React, { useState } from "react";

const values = [
  {
    type: "radio",
    id: "1",
    name: "radio1",
    placeholder: "",
  },
  {
    type: "radio",
    id: "2",
    name: "radio1",
    placeholder: "",
  },
  {
    type: "text",
    id: "3",
    name: "text-input",
    placeholder: "Enter yourn name",
  },
  {
    type: "text",
    id: "4",
    name: "text-input2",
    placeholder: "Enter yourn number",
  },
];

export default function Form() {
  const [stateValue, setStateValue] = useState({ input1: "", input2: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.input1;

    // setStateValue((val) => ({
    //   ...val,
    //   [name]: value,
    // }));

    console.log(name);
  };

  const handleInput = (e) => {
    const { name, value, id } = e.target;

    setStateValue((val) => ({
      ...val,
      [name]: value,
    }));
  };

  console.log(stateValue);
  return (
    <form onSubmit={handleSubmit}>
      {values.map((ele, index) => {
        return (
          <div className="d-flex m-3" key={index}>
            <label   htmlFor={ele.id}>{ele.name}</label>
            <input
              className="col"
              
              type={ele.type}
              id={ele.id}
              name={ele.name}
              placeholder={ele.placeholder}
              onChange={handleInput}
            />
          </div>
        );
      })}

      <button type="submit">Click</button>
    </form>
  );
}
