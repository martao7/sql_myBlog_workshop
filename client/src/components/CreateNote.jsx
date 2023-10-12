import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function CreateNote({ setNotes }) {
  const [newNote, setNewNote] = useState({
    titel: "",
    note: "",
    release_date: "",
    image_url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://myblog-2yab.onrender.com/notes", newNote)
      .then((response) => {
        console.log("Success:", response.data);
        alert("Your note was created successfully!");
        setNotes((prevNotes) => [...prevNotes, response.data]);
        setNewNote({
          titel: "",
          note: "",
          release_date: "",
          image_url: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titel"
        value={newNote.titel}
        onChange={handleChange}
        placeholder="Titel"
        required
      />

      <input
        type="date"
        name="release_date"
        value={newNote.release_date}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="image_url"
        value={newNote.image_url}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />

      <input
        type="text"
        name="note"
        id="note"
        value={newNote.note}
        onChange={handleChange}
        placeholder="Note"
        required
      />

      <button type="submit" id="addButton">
        Add Note
      </button>
    </form>
  );
}

export default CreateNote;
