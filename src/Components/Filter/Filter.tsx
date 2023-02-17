import React, {ChangeEvent} from "react";
import { useAppDispatch } from "../../hooks/redux";
import { filterContact } from "../../redux/filterSlice";

export const Filter: React.FC = () => {

    const dispatch = useAppDispatch()
    return (
      <>
        <p>Find contacts by name</p>
        <input
          placeholder="Type contact"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const action = filterContact({ filter : e.target.value})
            dispatch(action)
          }}
        />
      </>
    );
  };