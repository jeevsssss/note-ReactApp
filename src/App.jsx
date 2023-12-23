import './App.css';
import NotesList from './Components/NotesList';
import Search from './Components/Search';
import Header from './Components/Header';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

function App() {
  const defaultNotes = [
    {
      id: nanoid(),
      text: 'Welcome to the notes app',
      date: '10/01/2022'
    },
    {
      id: nanoid(),
      text: 'Taught By Mr.Chris Blakely',
      date: '10/01/2022'
    },
    {
      id: nanoid(),
      text: 'Recreated By Jeevaa s v',
      date: '10/01/2022'
    },
  ];

  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    // If there are saved notes, return them, otherwise return the default notes
    return savedNotes || defaultNotes;
  });

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Save notes to localStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  // Toggle dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className='Notes-Container'>
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearch={setSearchText} />
      <NotesList
        notedata={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
