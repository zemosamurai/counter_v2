import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    disable: boolean
    style: string
}

export const Button = (props: ButtonPropsType) => {
    const {name, callback, disable, style} = props

    return (
        <button className={style} disabled={disable} onClick={callback}>{name}</button>
    );
};
