import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const getRandomColor = () => {
    const colors = ["#FF5733", "#3498DB", "#27AE60", "#F1C40F", "#8E44AD"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const randomColor = getRandomColor();

  return (
    <Link
      to={`/Editnote/${note.id}`}
      className="note"
      style={{ backgroundColor: randomColor }}>
      <h4>
        {note.title.length > 40 ? note.title.substr(0, 20) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
