import React, { useContext, useState } from "react";
import noteContext from "../context/notes-context";
import { AlertComponent } from "./AlertComponent";

function CreateNotes() {
  const context = useContext(noteContext);
  const { addNotes } = context;

  const [state, setState] = useState({ title: "", content: "", type: "" });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setOpen(true);
    setMessage("Notes Successfully Added")
    setTimeout(() => {
      setOpen(false)
    }, 2000);
    const response =addNotes(state.title, state.content, state.type);
    console.log(response);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <div className=" flex items-center ">
        <AlertComponent message={message} open={open} />
      </div>
      <div className="max-w-screen-lg mx-auto p-6 h-[70vh]">
        <h1 className="text-3xl font-semibold mb-4">Add Notes</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium my-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 "
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium my-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="w-full border border-gray-300 rounded px-3 py-2 resize-y focus:outline-none focus:border-blue-400"
              rows="10"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-medium my-2"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              required
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="text"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
              onClick={handleClick}
            >
              Add Notes
            </button>
          </div>
        </form>
        {/* <NoteList notes={notes} /> */}
      </div>
    </div>
  );
}

export default CreateNotes;
