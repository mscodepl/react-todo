import React from 'react';

interface FilterButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none ${
                active
                    ? 'bg-[#0082ff] text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
            {label}
        </button>
    );
};

export default FilterButton;
