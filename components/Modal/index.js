
export default function Modal({ onClose, active }) {
  return (
    <div className={`${active && 'hidden'} fixed top-0 right-0 left-0 z-50 w-screen h-screen bg-white bg-opacity-50 flex justify-center items-center`}>
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              No forecast available for seleted date
            </h3>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              onClick={() => onClose()}
              className="text-white bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400 hover:bg-opacity-70 rounded-lg border text-sm font-medium px-5 py-2.5 "
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
