import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import "./App.css";

import Createnote from "./pages/Createnote";
import Editnote from "./pages/Editnote";

// import Mynotes from "./Mynotes";
import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  // console.log(notes);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Notes notes={notes} />}
          />

          <Route
            path="/create-note"
            element={<Createnote setNotes={setNotes} />}
          />
          <Route
            path="/editnote/:id"
            element={
              <Editnote
                notes={notes}
                setNotes={setNotes}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
