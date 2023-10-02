import React, { useContext, useEffect, useState, useRef } from "react";
import noteContext from "../context/notes-context";
import EditNotes from "./EditNotes";

import Modal, { toggleref } from "./modal";
import {  useNavigate } from "react-router-dom";

function NoteItem(props) {
  const { notes, deleteNotes, setNotes, editNotes, getNotes } =
    useContext(noteContext);

    let navigate= useNavigate();

  const handleDelete = (e) => {
    deleteNotes(e.target.value);
  };

  const handleClick = () => {
    // setEdit(true);
    console.log(toggleref.current);
    toggleref.current.click();
  };

  useEffect( () => {
      async function get(){
        const newNotes= await getNotes();
        // setNotes(newNotes.data);
        console.log("Notes",newNotes)
        if(localStorage.getItem('authToken'))
        {
          setNotes(newNotes.data);
        }
        else
        {
          navigate("/login")
        }

        
       
      }
      get();

  }, [])
  

  return (
    <div>
      <h1 className="max-w-5xl mx-auto p-4 rounded-md text-4xl font-semibold">
        Your Notes
      </h1>
      <Modal />
      <div>
        <div>
          {notes.map((item, index) => {
            const date = new Date(item.createdAt);

            return (
              <div className="text-xl" key={index}>
                <div className="border-spacing-7 bg-slate-300 my-6 max-w-5xl mx-auto p-4 rounded-md">
                  <div className="mb-2">
                    <h1 className="text-2xl text-center font-bold font-sans my-2">
                      {item.title}
                    </h1>
                    <hr />
                    <p className="p-4 text-left">{item.content}</p>
                    <h1 className="p-4 text-left text-lg font-sans font-medium">
                      Tag: {item.type}
                    </h1>
                    <h1 className="px-4 text-left text-mdfont-sans font-medium font-mono">
                      createdAt: {date.getHours()}:{date.getMinutes()}:
                      {date.getSeconds()} {date.getDate()}/{date.getMonth()}/
                      {date.getFullYear()}
                    </h1>
                  </div>
                  <hr />
                  <div className="flex justify-end space-x-3">
                    <button
                      data-modal-target="defaultModal"
                      data-modal-toggle="defaultModal"
                      className="border-cyan-500 bg-blue-500 text-white p-2 w-1/6 rounded-sm mt-2 bottom-0 right-1"
                      type="button"
                      onClick={handleClick}
                    >
                      Edit
                    </button>
                    <button
                      className="border-cyan-500 bg-blue-500 text-white p-2 w-1/6 rounded-sm mt-2 bottom-0 right-1"
                      onClick={handleDelete}
                      value={item.id}
                    >
                      Delete
                    </button>
                    <button className="border-cyan-500 bg-blue-500 text-white p-2 w-1/6 rounded-sm mt-2 bottom-0 right-1">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default NoteItem;
