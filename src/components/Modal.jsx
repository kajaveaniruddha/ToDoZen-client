const Modal = ({ visible, onClose, children }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25 flex justify-center items-center">
      <div className=" w-1/4 flex flex-col">
        <button
          type="text"
          className=" text-lg text-black place-self-end"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
        <div className=" bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
