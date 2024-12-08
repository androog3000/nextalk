import React, { useState, useEffect } from "react";
import Counter from "../Counter/Counter";

interface NumberDisplayProps {
    count: number;
}

const myNums:number[] = [];

const NumberDisplay: React.FC<NumberDisplayProps> = ({count}) => {
    const [myNums, setMyNums] = useState<number[]>([]);    

    useEffect(() => {
        setMyNums((prevNums) => [...prevNums, count]);
    }, [count]);
    
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