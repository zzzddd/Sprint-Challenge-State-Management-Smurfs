import React, { useState, useEffect } from "react";


import { postData, getData } from "../store/actions";

function SmurfForm() {
  const [newSmurf, setNewSmurf] = useState({});

  const isPosting = dispatch(state => state.isPosting);

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postData(newSmurf));
  };

  useEffect(() => dispatch(getData()), [isPosting]);

  return (
 <form>
    <div>
      <h2>Smurf a new Smurf!</h2>
      <input
        type="text"
        name="name"
        placeholder="...name"
        onChange={handleChange}
      />
     
      <input
        type="text"
        name="age"
        placeholder="...age"
        onChange={handleChange}
      />
     
      <input
        type="text"
        name="height"
        placeholder="...height"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
     </form>
  );
}


export default SmurfForm;
