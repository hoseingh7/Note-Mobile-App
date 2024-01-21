import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import rafiki from "../assets/_storage_emulated_0_Android_data_app.rbmain.a_cache_-2147483648_-210006.jpg";
import { BsInfoCircle } from "react-icons/bs";
import { Link, location } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";
import InfoModal from "../components/InfoModal";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [infoShowModal, setInfoShowModal] = useState(false);

  const handleSearh = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearh, [text]);

  const handleOpen = () => {
    if (infoShowModal) {
      setInfoShowModal(false);
    } else {
      setInfoShowModal(true);
    }
  };
  const handleClose = () => {
    setInfoShowModal(false);
  };

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearh();
            }}
            autoFocus
            placeholder="Keyword ..."
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}>
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
        <button
          className="btn  info__btn"
          onClick={handleOpen}>
          <BsInfoCircle />
        </button>
        {infoShowModal && (
          <InfoModal>
            <InfoModal
              InfoModal={InfoModal}
              onClick={handleClose}
            />
          </InfoModal>
        )}
      </header>
      <div className="notes__container">
        {filteredNotes.length == 0 && (
          <div className="not__notes">
            <img
              className="img__not_found"
              src={rafiki}
            />{" "}
            <p className="empty__notes">Create your first note !</p>
          </div>
        )}
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
          />
        ))}
      </div>
      <Link
        to="/create-note"
        className="btn add__btn">
        <HiPlus />
      </Link>
    </section>
  );
};

export default Notes;
