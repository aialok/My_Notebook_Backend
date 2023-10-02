import React from "react";

import MDEditor, { selectWord } from "@uiw/react-md-editor";
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";

const mkdStr = ``;

function MarkdownEditor() {
  console.log(MDEditor);

  const [value, setValue] = React.useState(mkdStr);
  return (
    <div className="container max-w-7xl mx-auto  my-2">
      <h1 className="text-4xl font-bold my-2">Markdown Editor</h1>
      <div data-color-mode="light">
        <MDEditor height={690} value={value} onChange={setValue} />
      </div>
    </div>
  );
}

export default MarkdownEditor;
