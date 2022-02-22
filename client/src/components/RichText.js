import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";

const RichText = () => {
  //   ClassicEditor.create(document.querySelector("#editor"), {
  //     plugins: [SimpleUploadAdapter],
  //     toolbar: [],
  //     simpleUpload: {
  //       // Feature configuration.
  //     },
  //   })
  //     .then(console.log("object"))
  //     .catch();
  return (
    <div>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        config={{
          ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
            uploadUrl: "/uploads",
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default RichText;
