import React from 'react';
import s from "./Counter.module.css";

type DisplayPropsType = {
    count: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Display = (props: DisplayPropsType) => {
    const {count, maxValue, error, disabled} = props
    // const style = s.count + (count === maxValue ? ' ' + s.error : '')
    const style = `${s.count} ${count === maxValue ? s.error : ''}`

    if (error) return <div className={`${s.count} ${s.errorText}`}>Incorrect value!</div>
    if (!disabled) return <div className={`${s.count} ${s.editSet}`}>enter values and press 'set'</div>

    return <div className={style}>{count}</div>
};

