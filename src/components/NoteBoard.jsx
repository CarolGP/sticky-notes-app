import { useState, useContext } from "react";
import useNotes from "../hooks/useNotes";
import { ColorContext } from "../context/ColorContext";
import { Note } from "./Note";

export const NoteBoard = () => {
  const { notes, addNote, deleteNote } = useNotes();
  const { color } = useContext(ColorContext);

  const [text, setText] = useState("");

  const handleAdd = () => {
    addNote(text, color);
    setText("");
  };

  return (
    <div>
      <h2>Notas</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una nota..."
      />

      <button onClick={handleAdd}>Añadir</button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.length === 0 ? (
          <p>No hay notas</p>
        ) : (
          notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              onDelete={deleteNote}
            />
          ))
        )}
      </div>
    </div>
  );
};