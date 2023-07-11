const Modal = ({ visible, onClose, children }) => {
  if (!visible) return null;
  return (
    <div
      id="wrapper"
      className=" fixed inset-0 backdrop-blur-sm bg-black bg-opacity-20 flex justify-center items-center z-30"
      onClick={(e) => {
        if (e.target.id === "wrapper") {
          onClose();
        }
      }}
    >
      <div id="modal-container" className="bg-white bg-opacity-20 border-2 border-white/10 flex flex-col rounded-2xl p-2">
        <button
          type="button"
          className="text-md font-bold text-white/50 place-self-end border-none rounded-2xl mr-1"
          onClick={onClose}
        >
          X
        </button>
        <div className=" max-h-fit min-h-max min-w-fit max-w-fit bg-auto rounded-2xl">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
