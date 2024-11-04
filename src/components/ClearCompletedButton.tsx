import React from 'react';

interface ClearCompletedButtonProps {
    onClick: () => void;
}

const ClearCompletedButton: React.FC<ClearCompletedButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded text-sm font-medium transition-colors bg-red-500 text-white hover:bg-red-600 focus:outline-none"
        >
            Usuń ukończone
        </button>
    );
};

export default ClearCompletedButton;
