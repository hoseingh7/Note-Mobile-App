import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSave } from "react-icons/md";
import { useState } from "react";
import UseCreateDate from "../components/UseCreateDate";
import DeleteModal from "../components/DeleteModal";

const Editnote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = UseCreateDate();
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    // redirect to home page
    navigate("/");
  };

  // const handleDelete = () => {
  //   if (!showDeleteModal) {
  //     setShowDeleteModal(false);
  //   } else {
  //     setShowDeleteModal(true);
  //   }
  // };

  // const ShowModal = () => {
  //   document.getElementById("my_modal").showModal();
  // };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const newNotes = notes.filter((item) => item.id != id);
    setNotes(newNotes);
    navigate("/");
  };

  return (
    <section>
      <header className="create-note__header">
        <Link
          to="/"
          className="btn">
          <IoIosArrowBack />
        </Link>
        <button
          className="btn lg primary"
          onClick={handleForm}>
          <MdSave />
        </button>
        <button
          className="btn danger"
          onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form
        className="create-note__form"
        onSubmit={handleForm}>
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

      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          onDelete={confirmDelete}
        />
      )}
    </section>
  );
};

export default Editnote;
