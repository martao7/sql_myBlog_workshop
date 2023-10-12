import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import axios from "axios";

function Notes() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios
      .get("https://myblog-2yab.onrender.com/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (noteId) => {
    await axios.delete(`https://myblog-2yab.onrender.com/notes/${noteId}`);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    alert("Your note is successfully deleted");
  };

  return (
    <div>
      <CreateNote setNotes={setNotes} />

      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.titel}</h2>
          <p>{note.note}</p>
          <img src={note.image_url} alt={note.titel} />

          <p>Date: {note.release_date}</p>
          {/* <button onClick={() => handleEdit(book.id)}>Edit Book</button> */}
          {/* /////DELETE BUTTON */}
          <button onClick={() => handleDelete(note.id)} id="deleteButton">
            Delete Note
          </button>
        </div>
      ))}
    </div>
  );
}

export default Notes;
