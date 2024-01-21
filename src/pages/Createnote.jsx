import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdSave } from "react-icons/md";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import UseCreateDate from "../components/UseCreateDate";

const Createnote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = UseCreateDate();
  const navigate = useNavigate();
  const colors = ["#FF5733", "#3498DB", "#27AE60", "#F1C40F", "#8E44AD"];

  function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const randomColor = getRandomColor(colors);
      const note = { id: uuid(), title, details, date, color: randomColor };
      // console.log(title, details);
      // add this note to the Notes array
      setNotes((prevNotes) => [note, ...prevNotes]);
      //redirect to home page

      navigate("/");
      //   console.log(note);
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link
          to="/"
          className="btn">
          {" "}
          <IoIosArrowBack />
        </Link>
        <button
          className="btn lg primary"
          onClick={handleSubmit}>
          <MdSave />
        </button>
      </header>
      <form
        className="create-note__form"
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note Details ..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
};

export default Createnote;
