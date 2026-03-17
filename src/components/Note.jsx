export const Note = ({ note, onDelete }) => {
  return (
    <div
      style={{
        backgroundColor: note.color,
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        border: "1px solid black",
        width: "150px",
      }}
    >
      <p>{note.text}</p>
      <button onClick={() => onDelete(note.id)}>
        Eliminar
      </button>
    </div>
  );
};