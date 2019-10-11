import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "../store/actions";
export default function SmurfList() {
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getData()), []);

  return (
    <div>
      {data.map(smurf => (
        <p>
            <h3>{smurf.name}</h3>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
        </p>
      ))}
    </div>
  );
}


