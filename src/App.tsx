import React, { useState } from 'react';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="p-2 bg-gray-800 border-b border-gray-700"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
