import React, { useState } from 'react';

interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input.trim());
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-6 shadow-xl">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Dodaj nowe zadanie..."
                className="flex-grow px-4 py-2 bg-gray-800/50 text-white/80 border-none rounded-l-2xl focus:outline-none"
            />
            <button
                type="submit"
                className="bg-[#0082ff] font-semibold text-white px-6 py-2 rounded-r-2xl hover:bg-[#006bb3] transition-colors focus:outline-none"
            >
                Dodaj
            </button>
        </form>
    );
};

export default TodoInput;
