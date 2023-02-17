import React, { useState } from "react";
import { IContact } from "../types/contact";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../hooks/redux";
import { addContact } from "../../redux/contactsSlice";

export const Form: React.FC = () => {
  const [name, setName] = useState<string>();
  const [number, setNumber] = useState<string>();

  const dispatch = useAppDispatch();

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  }

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const action = addContact(contact as IContact);
    dispatch(action);
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={onInputChange}
      />
      <input
        type="phone"
        placeholder="number"
        name="number"
        onChange={onInputChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
