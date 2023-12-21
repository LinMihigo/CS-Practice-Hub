import { useState } from "react";
function Words() {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={handleClick}>Search</button>
      <div>{value}</div>
    </div>
  );
}

export default Words;
