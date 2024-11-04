import React from 'react';
import FilterButton from './FilterButton';

interface FilterButtonsProps {
    currentFilter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, setFilter }) => {
    const filters: { label: string; value: 'all' | 'active' | 'completed' }[] = [
        { label: 'Wszystkie', value: 'all' },
        { label: 'Aktywne', value: 'active' },
        { label: 'Ukończone', value: 'completed' },
    ];

    return (
        <div className="flex space-x-2">
            {filters.map((filter) => (
                <FilterButton
                    key={filter.value}
                    label={filter.label}
                    active={currentFilter === filter.value}
                    onClick={() => setFilter(filter.value)}
                />
            ))}
        </div>
    );
};

export default FilterButtons;
