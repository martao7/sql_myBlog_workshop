import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import axios from "axios";

function Notes() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios
      .get("https://myblog-2yab.onrender.com/posts")
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
    await axios.delete(`https://myblog-2yab.onrender.com/posts/${noteId}`);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    alert("Your note is successfully deleted");
  };

  return (
    <div>
      <CreateNote setNotes={setNotes} />

      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.name}</h2>
          <img src={note.image_url} alt={note.name} />

          <p>Release Date: {note.release_date}</p>
          {/* <button onClick={() => handleEdit(book.id)}>Edit Book</button> */}
          <button onClick={() => handleDelete(note.id)}>Delete Note</button>
        </div>
      ))}
    </div>
  );
}

export default Notes;
