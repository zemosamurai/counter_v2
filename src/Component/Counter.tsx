import React from 'react';
import s from "./Counter.module.css";
import {Button} from "./Button";
import {Display} from "./Display";

type CounterPropsType = {
    count: number
    setCount: (count: number) => void
    minValue: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Counter = (props: CounterPropsType) => {
    const {count, setCount, minValue, maxValue, error, disabled} = props

    const onClickUp = () => count < maxValue && setCount(count + 1)
    const onClickReset = () => setCount(minValue)

    return (
        <div className={s.wrapper}>
            <Display
                count={count}
                maxValue={maxValue}
                error={error}
                disabled={disabled}
            />
            <div className={s.btnWrapper}>
                <Button
                    name={'inc'}
                    callback={onClickUp}
                    disable={count === maxValue || error || !disabled}
                    style={s.btn}
                />
                <Button
                    name={'reset'}
                    callback={onClickReset}
                    disable={!disabled || error} // {count === minValue}
                    style={s.btn}
                />
            </div>
        </div>
    )
};



