import React, { useState } from "react";

function Modal({ children, title }) {
  return (
    <>
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>

          {children}
        </div>
      </dialog>
    </>
  );
}

export default Modal;
