import React from "react";
import { todoVisibility } from "../actions/todoActions";
import { useDispatch } from "react-redux";

const VisibilityButtons = () => {
  const dispatch = useDispatch();

  const handleVisibility = (e) => {
    e.preventDefault();
    dispatch(todoVisibility(e.currentTarget.value));
  };

  return (
    <>
      <button
        type="onClick"
        value="ALL"
        onClick={(e) => {
          handleVisibility(e);
        }}
      >
        All
      </button>
      <button
        type="onClick"
        value="ACTIVE"
        onClick={(e) => handleVisibility(e)}
      >
        Active
      </button>
      <button
        type="onClick"
        value="COMPLETE"
        onClick={(e) => handleVisibility(e)}
      >
        Completed
      </button>
    </>
  );
};

export default VisibilityButtons;
