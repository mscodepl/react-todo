import React, { useState, useMemo } from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import useLocalStorage from './hooks/useLocalStorage.ts';
import FilterButtons from './components/FilterButtons';
import ClearCompletedButton from "./components/ClearCompletedButton.tsx";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

type Filter = 'all' | 'active' | 'completed';

const App: React.FC = () => {
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
    const [filter, setFilter] = useState<Filter>('all');

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleComplete = (id: number) => {
        setTodos(
            todos.map((todo: Todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = (): void => {
        setTodos(todos.filter((todo: Todo) => !todo.completed));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo: Todo) => todo.id !== id));
    };

    const filteredTodos = useMemo(() => {
        return todos.filter((todo: Todo) => {
            if (filter === 'active') return !todo.completed;
            if (filter === 'completed') return todo.completed;
            return true;
        });
    }, [todos, filter]);

    const remainingTodos = useMemo(() => {
        return todos.filter((todo: Todo) => !todo.completed).length;
    }, [todos]);

    return (
        <div className="text-slate-200 flex flex-col items-center justify-center min-h-screen w-full bg-[#131720] relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://cms.mscode.pl/uploads/hero_058066354c.svg')] before:opacity-10 before:bg-no-repeat before:bg-top before:w-full before:h-full before:z-0 before:transform before:-translate-x-1/2 font-Montserrat">
            <div className="absolute -left-44 -top-44 w-[350px] h-[250px] sm:w-[550px] sm:h-[350px] opacity-20 bg-[#0082ff] blur-[190px] rounded z-10"></div>
            <div className="absolute -right-44 bottom-44 w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] opacity-30 bg-[#0082ff] blur-[110px] rounded z-10"></div>

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl z-20">
                <div className="text-center mb-6 sm:mb-8 font-bold">
                    <span className="from-blue-600 via-sky-500 to-blue-600 animate-gradient-x bg-gradient-to-r bg-clip-text text-transparent block text-3xl sm:text-4xl lg:text-6xl">
                        Lista Zadań
                    </span>
                    <span className="from-gray-200 via-gray-300 to-gray-200 bg-gradient-to-r bg-clip-text pb-2 sm:pb-4 -mb-2 sm:-mb-4 text-transparent text-xl sm:text-3xl lg:text-4xl">
                        Zarządzaj swoimi zadaniami efektywnie i w stylu.
                    </span>
                </div>
                <TodoInput addTodo={addTodo} />
                <div className="bg-gray-800/50 shadow-xl rounded-2xl px-4 py-6 sm:px-6 sm:py-8 flex flex-col justify-center">
                    {filteredTodos.length > 0 ? (
                        filteredTodos.map((todo: Todo) => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-400">Brak zadań do wyświetlenia.</p>
                    )}
                    <span className="text-gray-400 text-center mt-4 sm:mt-5">
                        Pozostało do zrobienia: <b>{remainingTodos}</b>
                    </span>
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-3 sm:mt-2 space-y-2 sm:space-y-0">
                        <FilterButtons currentFilter={filter} setFilter={setFilter} />
                        <ClearCompletedButton onClick={clearCompleted} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
