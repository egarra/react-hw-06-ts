import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { filterContact } from "../../redux/filterSlice";

export const Filter = () => {

    const dispatch = useAppDispatch()
    return (
      <>
        <p>Find contacts by name</p>
        <input
          placeholder="Type contact"
          type="text"
          onChange={e => {
            const action = filterContact(e.target.value)
            dispatch(action)
          }}
        />
      </>
    );
  };