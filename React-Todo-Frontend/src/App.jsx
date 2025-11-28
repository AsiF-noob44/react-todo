import { useState } from "react";
import ModalForm from "./components/ModalForm";

function App() {
  /*
  States -> 3
    1. todos -> array of todo objects
    2. isModalOpen -> boolean to track modal visibility
    3. editingTab-> null or todo object being edited
  */

  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTab, setEditingTab] = useState(null);

  const openAddModal = () => {
    setIsModalOpen(true);
    setEditingTab(null);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-3xl mx-auto">
          {/* Title & Submit Button */}

          <div className="text-center ">
            <h1 className="text-3xl font-bold my-5">Todo App</h1>
            <button
              onClick={openAddModal}
              className="px-4 py-2 my-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600  "
            >
              Add Todo
            </button>
          </div>
          {/* End of Title & Submit Button */}

          {/* Modal Form */}
          <ModalForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialTitle={editingTab ? editingTab.title : ""}
            initialDescription={editingTab ? editingTab.description : ""}
          />
          {/* End of Modal Form */}
        </div>
      </div>
    </>
  );
}

export default App;
