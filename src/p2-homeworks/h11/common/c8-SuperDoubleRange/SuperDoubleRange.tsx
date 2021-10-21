/*type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        //onChangeRange, value,
        // min, max, step, disable, ...

    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <input
                type={'range'}
                //onChange={onChangeCallback}
                //className={finalRangeClassName}

                //{...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperDoubleRange*/


import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useLayoutEffect, useState} from "react";
import "./SuperDoubleRange.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultInputPropsType & {
    minValue: number
    maxValue:number
    onChangeRangeMinValue?: (value: number) => void
    onChangeRangeMaxValue?: (value: number) => void
}

export const Slider: React.FC<PropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRangeMinValue,
        className, onChangeRangeMaxValue,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    let thumbsize = 14;
    let min = 0
    let max = 100

    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(avg);
    const [maxVal, setMaxVal] = useState(avg);

    const width = 300;
    const minWidth = thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    const minPercent = ((minVal - min) / (avg - min)) * 100;
    const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
    const styles = {
        min: {
            width: minWidth,
            left: 0,
            "--minRangePercent": `${minPercent}%`
        },
        max: {
            width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
            left: minWidth,
            "--maxRangePercent": `${maxPercent}%`
        }
    };

    const onChangeMinValueCallBackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinVal(Number(e.currentTarget.value))
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRangeMinValue && onChangeRangeMinValue(+e.currentTarget.value)
    }

    const onChangeMaxValueCallBackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxVal(Number(e.currentTarget.value))
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRangeMaxValue && onChangeRangeMaxValue(Math.ceil(+e.currentTarget.value))
    }

    useLayoutEffect(() => {
        setAvg((maxVal + minVal) / 2);
        setMinVal(restProps.minValue)
        setMaxVal(restProps.maxValue)
    }, [minVal, maxVal, restProps.minValue, restProps.maxValue]);

    console.log(maxVal, avg, min, max, maxPercent);

    return (
        <div
            className="min-max-slider"
            data-legendnum="2"
            data-rangemin={min}
            data-rangemax={max}
            data-thumbsize={thumbsize}
            data-rangewidth={width}
        >
            <input
                id="min"
                className="min"
                style={styles.min}
                name="min"
                type="range"
                step="1"
                min={min}
                max={avg}
                value={minVal}
                onChange={onChangeMinValueCallBackHandler}
                //onChange={({ target }) => setMinVal(Number(target.value))}
            />
            <input
                id="max"
                className="max"
                style={styles.max}
                name="max"
                type="range"
                step="1"
                min={avg}
                max={max}
                value={maxVal}
                onChange={onChangeMaxValueCallBackHandler}
            />
        </div>
    );
};

