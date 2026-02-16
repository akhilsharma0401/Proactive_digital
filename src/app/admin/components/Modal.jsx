"use client";

import { IoClose } from "react-icons/io5";


const Modal = ({
  isOpen,
  onClose,
  title = "Details",
  children,
  width = "max-w-3xl",
  showCancelButton = true,
  showConfirmButton = true,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
}) => {

  // Do not render modal if closed
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">

      {/* Modal Box */}
      <div
        className={`bg-white rounded-xl shadow-lg w-full ${width} p-6 relative animate-slideUp`}
      >

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">

          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-red-500"
            aria-label="Close modal"
          >
            <IoClose className="w-6 h-6" />
          </button>

        </div>


        {/* Body */}
        <div className="mt-4 text-sm text-gray-700 max-h-[70vh] overflow-y-auto pr-1">
          {children}
        </div>


        {/* Footer Buttons */}
        {(showCancelButton || showConfirmButton) && (

          <div className="mt-6 flex justify-center gap-3">
            {/* Confirm Button */}
            {showConfirmButton && (
              <button
                type="button"
                onClick={onConfirm}
                className="px-4 py-2 thmbtn text-sm font-medium rounded-lg"
              >
                {confirmText}
              </button>
            )}


            {/* Cancel Button */}
            {showCancelButton && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
              >
                {cancelText}
              </button>

            )}

          </div>

        )}

      </div>
    </div>
  );
};

export default Modal;
