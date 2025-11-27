const ModalForm = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{/* Add / Edit Todo */}</h2>

        <form></form>
      </div>
    </div>
  );
};

export default ModalForm;
