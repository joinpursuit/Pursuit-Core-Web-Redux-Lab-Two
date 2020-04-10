import React from "react";
import { useDispatch } from "react-redux";
import { VISIBILITY_FILTER } from "../Actions/actionTypes";
import { visibilityFilter } from "../Actions/actions";

const VisibilityFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatchEvent(VisibilityFilter("all"))}>
        All
      </button>
      <button onClick={() => dispatchEvent(VisibilityFilter("active"))}>
        Active
      </button>
      <button onClick={() => dispatchEvent(VisibilityFilter("complete"))}>
        Complete
      </button>
    </div>
  );
};

export default VisibilityFilter;
