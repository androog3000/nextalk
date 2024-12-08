import React, { useState, useEffect } from "react";
import Counter from "../Counter/Counter";

interface NumberDisplayProps {
    count: number; //count value passed from parent
    resetTrigger: boolean; //a boolean indicating if reset is triggered
    onResetComplete: () => void; //callback to notify the parent when reset is complete
}

const myNums:number[] = [];

const NumberDisplay: React.FC<NumberDisplayProps> = ({count, resetTrigger, onResetComplete}) => {
    const [myNums, setMyNums] = useState<number[]>([]);    

    useEffect(() => {
        setMyNums((prevNums) => [...prevNums, count]);
    }, [count]);

    useEffect(() => {
        if (resetTrigger) {
            setMyNums([]);
            onResetComplete();
        }
    }, [resetTrigger, onResetComplete]);
    
    return (
        <>
            <ul>
                {myNums.map((num, index) => 
                (<li key={index}> {num} </li>)
                )}
            </ul>
        </>
    );
};

export default NumberDisplay;