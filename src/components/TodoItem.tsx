import React from 'react';

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleComplete, deleteTodo }) => {
    return (
        <div className="flex items-center justify-between bg-gray-800/30 shadow-sm rounded-2xl px-4 py-3 mb-3">
            <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => toggleComplete(id)}
                        className="sr-only"
                    />
                    <span className={`relative w-6 h-6 mr-3 flex items-center justify-center border-2 rounded-lg transition ${completed ? 'bg-blue-600 border-blue-600' : 'bg-gray-700 border-gray-600'}`}>
                        {completed && (
                            <svg
                                className="w-4 h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        )}
                        <span className={`absolute inset-0 rounded-lg transition-transform duration-200 ${completed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></span>
                    </span>
                </label>
                <span className={`text-lg ${completed ? 'line-through text-gray-400' : 'text-white/80'}`}>
                    {text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(id)}
                className="text-red-500 hover:text-red-700 transition-colors focus:outline-none"
                title="Usuń zadanie"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default TodoItem;
