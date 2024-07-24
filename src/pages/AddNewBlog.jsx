import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import JoditEditor from "jodit-react";
import PopUp from "../components/PopUp";

export default function AddNewBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [popUpContent, setPopUpContent] = useState("DummyContent");
  const editor = useRef(null);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get("id");
    if (id) {
      fetch("http://localhost:3000/getBlogById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setTitle(res.message.title);
          setDescription(res.message.description);
        });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get("id");

    if (id) {
      fetch("http://localhost:3000/blogUpdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id : id,
          title: title,
          description: description,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setPopUpContent(res.message);
          setOpen(true);
          navigate('/viewAllBlogs', { replace: true });

        });
    } else {
      fetch("http://localhost:3000/blogSubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setPopUpContent(res.message);
          setOpen(true);
          navigate('/viewAllBlogs', { replace: true });
        });
    }
  };

  return (
    <div className="py-32 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 mb-2 text-xl font-semibold text-main-color"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-main-color"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 focus:ring-2 focus:ring-main-color">
            <label
              htmlFor="description"
              className="block text-gray-700 mb-2 text-xl font-semibold text-main-color"
            >
              Description
            </label>
            <JoditEditor
              ref={editor}
              value={description}
              onBlur={(newContent) => setDescription(newContent)}
              config={{
                readonly: false,
                toolbarButtonSize: "middle",
                height: 300,
                buttons: [
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "superscript",
                  "subscript",
                  "eraser",
                  "ul",
                  "ol",
                  "outdent",
                  "indent",
                  "font",
                  "fontsize",
                  "brush",
                  "paragraph",
                  "image",
                  "table",
                  "link",
                  "align",
                  "undo",
                  "redo",
                  "hr",
                  "copyformat",
                  "fullsize",
                  "selectall",
                  "print",
                  "preview",
                  "source",
                ],
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-main-color text-white py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save Blog
          </button>
        </form>
      </div>
      <PopUp open={open} setOpen={setOpen} popUpContent={popUpContent} />
    </div>
  );
}
