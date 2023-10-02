import noteContext from "./notes-context";
import { useState, useEffect } from "react";


const NoteState = (props) => {
  const host = "http://localhost:3000";

  // Adding Notes
  const [notes, setNotes] = useState([]);
 

  // useEffect(() => {
  //   getNotes();
  // }, []);

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/v1/notes/`, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem('authToken'),
        },
      });
      const newNotes = await response.json();
      return newNotes;
      
     

     
    } catch (error) {
      console.log(error);
    }
  };

  // const data = [initialNotes()];
  // console.log(data);

  const addNotes = async (title, content, type) => {
    console.log(title, content, type);

    try {
      const response = await fetch(`${host}/api/v1/notes/create`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            localStorage.getItem('authToken'),
        },

        body: JSON.stringify({ title, content, type }),
      });

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      // Assuming your API returns the updated notes data
      const newNotes = await response.json();
      console.log(newNotes.data);
      notes.push(newNotes.data);
      // setNotes(notes.concat(newNotes.data));
      console.log("Notes added");
      // getNotes({ ...notes, newNotes });
    } catch (error) {
      console.log(error);
    }
  };

  // Deleting Note
  const deleteNotes = async (id) => {
    try {
      const response = await fetch(`${host}/api/v1/notes/${id}`, {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            localStorage.getItem('authToken'),
        },
      });

      const data = await response.json();
      console.log(data.success);
      if (data.success) {
        const newNotes = notes.filter((item) => {
          return item.id != id;
        });
        setNotes(newNotes);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Editing Notes

  const editNotes = async (id, title, content, type) => {
    try {
      const response = await fetch(`${host}/api/v1/notes/${id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            localStorage.getItem('authToken'),
        },

        body: JSON.stringify({ title, content, type }),
      });

      // Changing in the client side

      for (let i = 0; i != notes.length; i++) {
        const element = notes[index];
        if (element.id === id) {
          element.title = title;
          element.content = content;
          element.type = type;
        }
      }
    } catch (error) {
      console.log(error);
      throw { error };
    }
  };

  return (
    <>
      <noteContext.Provider
        value={{ setNotes, addNotes, deleteNotes, getNotes, notes }}
      >
        {props.children}
      </noteContext.Provider>
    </>
  );
};

export default NoteState;
