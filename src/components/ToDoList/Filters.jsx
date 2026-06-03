import React, { memo } from 'react';

const Filters = ({ setActiveFilter, activeFilter, filtersData }) => {

    const filters = Object.keys(filtersData);

    return (
        <div className="filters">
            {filters.map(item => (
                <button 
                    key={item}
                    onClick={() => setActiveFilter(item)} 
                    style={{ backgroundColor: activeFilter === item ? 'mediumseagreen' : '#ddd' }}
                >
                    {item.toUpperCase()}       
                </button>))}            
        </div>
    );
};

export default memo(Filters);
