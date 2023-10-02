import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes-state";
import About from "./components/About";
import CreateNotes from "./components/CreateNotes";
import Note from "./components/Note";
import MarkdownEditor from "./components/MarkDownEditor";
import Modal from "./components/modal";
import Login from "./components/Login";
import { useState } from "react";

function App() {


   

  return (
    <>
      <NoteState>
        <div>
          <BrowserRouter>
            <NavBar />
            
            <Routes>
              <Route path="/signup" element={<SignUpForm />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/add-notes" element={<CreateNotes />}></Route>
              <Route path="/get-notes" element={<Note />}></Route>
              <Route path="/editor" element={<MarkdownEditor />}></Route>
              <Route path="/modals" element={<Modal />}></Route>
             
            </Routes>
          </BrowserRouter>
        </div>
      </NoteState>
    </>
  );
}

export default App;
