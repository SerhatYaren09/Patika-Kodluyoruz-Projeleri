import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: nanoid(),
        text: "Note 1",
        color: "green",
      },
      {
        id: nanoid(),
        text: "Note 2",
        color: "blue",
      },
      {
        id: nanoid(),
        text: "Note 3",
        color: "yellow",
      },
    ],
    searchValue: "",
  },
  reducers: {
    addNote: (state, action) => {
      const { text } = action.payload;
      const { color } = action.payload;

      state.notes.push({
        id: nanoid(),
        text: text,
        color: color,
      });
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    destroyNote: (state, action) => {
      const id = action.payload;
      const filtered = state.notes.filter((note) => note.id !== id);
      state.notes = filtered;
    },
  },
});

export const { addNote, setSearchValue, destroyNote } = notesSlice.actions;
export default notesSlice.reducer;