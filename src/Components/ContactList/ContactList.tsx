import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList: React.FC = () => {
    const dispatch = useAppDispatch()
    function onDeleteContact (id: string) {
        const action = deleteContact(id)
        dispatch(action)
      } 
    const filter = useAppSelector(state => state.filter.filter)
    const contacts = useAppSelector(state => state.persistedReducer.contacts.contacts)
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    
    return (
        <ul>
            {visibleContacts.map(({name, number, id}) => {
                return (
                    <li key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <button onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}