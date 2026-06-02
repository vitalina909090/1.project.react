import React, { memo } from 'react';

const CounterValue = ({value, id}) => {
    console.log(id);

    return (
        <span>
            {value}
        </span>
    );
}

export default memo(CounterValue);
