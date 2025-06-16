import React, { useState } from "react";
import AddPeeps from "./AddPeeps.jsx";

const List = () => {
  const [people, setPeople] = useState([]);
  const [checkedIn, setCheckedIn] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPerson, setNewPerson] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  const toggleStatus = (id) => {
    setCheckedIn((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openModal = () => {
    setNewPerson({ name: "", phone: "" });
    setError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPerson.name.trim()) {
      setError("Name is required");
      return;
    }

    const newId = people.length > 0 ? people[people.length - 1].id + 1 : 1;

    setPeople((prev) => [
      ...prev,
      { id: newId, name: newPerson.name.trim(), phone: newPerson.phone.trim() },
    ]);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Header with title and plus button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">Attendee List</h2>
        <button
          onClick={openModal}
          className="text-white bg-blue-600 rounded-full w-7 h-7 p-4 flex items-center justify-center hover:bg-blue-700 transition cursor-pointer"
          aria-label="Add attendee"
        >
          +
        </button>
      </div>

      {/* List */}
      <ul className="space-y-3">
        {people.map((person) => (
          <li
            key={person.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
          >
            <span className="text-gray-800 font-medium">
              {person.name}
              {person.phone && (
                <span className="text-gray-500 ml-2 text-sm">({person.phone})</span>
              )}
            </span>
            <button
              onClick={() => toggleStatus(person.id)}
              className={`px-3 py-1 rounded text-white text-sm ${
                checkedIn[person.id]
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {checkedIn[person.id] ? "Check Out" : "Check In"}
            </button>
          </li>
        ))}
      </ul>

      {/* Modal Component */}
      <AddPeeps
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        newPerson={newPerson}
        onChange={handleChange}
        error={error}
      />
    </div>
  );
};

export default List;
