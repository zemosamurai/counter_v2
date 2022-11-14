import s from './SettingCounter.module.css'
import {Button} from "./Button";
import React, {ChangeEvent} from "react";

type SettingCounterPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    updateCounter: () => void
    errorMax: boolean
    error: boolean
    disabled: boolean
    setDisabled: (value: boolean) => void
}

export const SettingCounter = (props: SettingCounterPropsType) => {

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => props.setMaxValue(+e.currentTarget.value)
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => props.setMinValue(+e.currentTarget.value)
    const onSetHandler = () => {
        props.updateCounter()
        props.setDisabled(true)
    }
    const onFocusHandler = () => props.setDisabled(false)

    return (
        <div className={s.wrapper}>
            <div className={s.count}>
                <div>
                    <p>max value: </p>
                    <input
                        value={props.maxValue}
                        onFocus={onFocusHandler}
                        className={props.errorMax ? s.errorInput : ''}
                        type={"number"}
                        onChange={onChangeMaxHandler}
                    />
                </div>
                <div className={s.elemWrap}>
                    <p>start value: </p>
                    <input
                        value={props.minValue}
                        onFocus={onFocusHandler}
                        type={"number"}
                        onChange={onChangeStartHandler}
                        className={props.error ? s.errorInput : ''}
                    />
                </div>
            </div>
            <div className={s.btnWrapper}>
                <Button
                    name={'set'}
                    callback={onSetHandler}
                    disable={props.disabled || props.error}
                    style={s.btn}
                />
            </div>
        </div>
    )
}