import { MdDelete } from "react-icons/md";
const Notes = ({ id, text, date, handleDeleteNote}) => {
    return (
        <div className="notes-card">
            <span>{text}</span>
            <div className="notes-footer">
                <small>{date}</small>
                <MdDelete className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id)}/>
            </div> 
        </div>
    )
}

export default Notes;