import React from "react";
import { todoVisibility } from "../actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const VisibilityButtons = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  const handleVisibility = (e) => {
    e.preventDefault();
    dispatch(todoVisibility(e.currentTarget.value));
  };

  return (
    <>
      {loading === true ? (
        <div className="visibilityBtns">
          <button
            type="onClick"
            value="all"
            onClick={(e) => {
              handleVisibility(e);
            }}
          >
            All
          </button>
          <button
            type="onClick"
            value="active"
            onClick={(e) => handleVisibility(e)}
          >
            Active
          </button>
          <button
            type="onClick"
            value="complete"
            onClick={(e) => handleVisibility(e)}
          >
            Completed
          </button>
        </div>
      ) : null}
    </>
  );
};

export default VisibilityButtons;
