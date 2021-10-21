import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Slider} from "./common/c8-SuperDoubleRange/SuperDoubleRange";


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div style={{minWidth:'40px'}}>{value1}</div>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRangeMinValue={setValue1}
                    value={value1}
                />
            </div>

            <div style={{width:'300px'}}>
                <span>{value1}</span>
                {/*<SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    value={[value1,value2]}
                />*/}
                <Slider
                    minValue={value1}
                    onChangeRangeMinValue={setValue1}
                    onChangeRangeMaxValue={setValue2}
                    maxValue={value2}
                />
                <div style={{paddingTop:'10px'}}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
