import React, { memo, useMemo } from 'react';

const IsFive = ({ value }) => {
    console.log('IsFive');

    const getResult = useMemo(() => {
        let i = 0;
        while (i < 1_000_000_000) { i++ };
        return value === 5 ? "Is Five" : "Is Not Five";
    }, [value]);

    return (
        <div>
            {getResult}
        </div>
    );
}

export default memo(IsFive, (prevProps, nextProps) => {
    if (nextProps.value === 5 || prevProps.value === 5) return false;
    return true;
});
