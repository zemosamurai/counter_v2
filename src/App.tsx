import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Component/Counter";
import {SettingCounter} from "./Component/SettingCounter";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState<number>(minValue)
    const [disabled, setDisabled] = useState(true)

    const updateCounter = () => {
        setCount(minValue)
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const errorMax = maxValue <= minValue
    const errorMin = minValue < 0
    const error = errorMax || errorMin

    useEffect(() => {
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue) {
            setMinValue(JSON.parse(newMinValue))
            setCount(JSON.parse(newMinValue))
        }
        if (newMaxValue) setMaxValue(JSON.parse(newMaxValue))
    },[])

    return (
        <div className='wrapperApp'>
            <SettingCounter
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                updateCounter={updateCounter}
                errorMax={errorMax}
                error={error}
                disabled={disabled}
                setDisabled={setDisabled}

            />
            <Counter
                count={count}
                setCount={setCount}
                minValue={minValue}
                maxValue={maxValue}
                error={error}
                disabled={disabled}
            />
        </div>
    );
}

export default App;
