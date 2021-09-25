import React from "react";

import styles from "./styles.module.css";

import { useSelector, useDispatch } from "react-redux";
import { destroyNote } from "../../redux/notes/notesSlice";

function Content() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.notes.searchValue);
  const notes = useSelector((state) => state.notes.notes);

  let filtered = notes;

  if (searchValue && searchValue !== "") {
    const searchedValue = searchValue.toLowerCase();

    if (searchedValue && searchedValue !== "") {
      filtered = notes.filter((note) => note.text.toLowerCase().includes(searchedValue));
    } else {
      filtered = notes;
    }
  }

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete it?")) {
      console.log("content id", id);
      dispatch(destroyNote(id));
    }
  };

  return (
    <ul className={styles.contentContainer}>
      {filtered.map((note) => (
        <li key={note.id} className={note.color}>
          <p>{note.text}</p>
          <button className={styles.delete} onClick={() => handleDelete(note.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Content;