import React from "react";

function EditNotes() {
  const handleChange = () => {
        
  };

  const handleClick = () => {};

  return (
    <div className="max-w-screen-lg mx-auto p-6">
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
            rows="15"
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
            update Notes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNotes;
