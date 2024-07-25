import { useState, useEffect } from 'react';

const NotesListComponent = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/notes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setNotes(data.notes))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default NotesListComponent;
