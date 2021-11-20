import React from 'react';
import { useSelector } from "react-redux";
export function Sample() {
    const count = useSelector(state => state.counter.count);
    return (
        <>
            <h2>Sample Component</h2>
            <div>The count in sample component is {count}</div>
        </>
    )
}