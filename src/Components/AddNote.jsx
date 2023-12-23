import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const[NoteText,setNoteText]=useState('');
 
    const charactersLimit = 200;

    const handleChange = (event) => {
        if(charactersLimit - event.target.value.length >= 0)
        setNoteText(event.target.value);
        else
        setNoteText(event.target.value.slice(0, charactersLimit));
    }

    const handleSaveClick = () => {
        if(NoteText.trim().length > 0){
            handleAddNote(NoteText);
            setNoteText('');
        }  
    };

    return (
        <div className='notes-card new'>
            <textarea rows='8' cols='10' placeholder='Type to add a note...' value={NoteText} onChange={handleChange}></textarea>
            <div className='notes-footer'>
                <small>{charactersLimit - NoteText.length} remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div> 
        </div>
    )
}

export default AddNote;