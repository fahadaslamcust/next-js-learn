"use client";

import { useState } from "react";
interface Item{
    name: string;
    username: string;
    email: string;
    website: string;
}
interface previewButtonProps{
    item:Item;
}
export default function PreviewButton({item}: previewButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Preview
      </button>

      {open && (
        <dialog open>
          <p>username: {item.username}</p>
          <p>email: {item.email}</p>
          <p>website: {item.website}</p><br/>
          <button onClick={() => setOpen(false)}>
            Close
          </button>
        </dialog>
      )}
    </>
  );
}