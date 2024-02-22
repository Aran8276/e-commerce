import React from 'react'

type SelfProps = { 
    id: string,
    text: string,
}

function SimpleCheckbox(props: SelfProps) {
    return (
        <div className="flex">
            <input type="checkbox" id={props.id} className="self-center rounded-md hover:cursor-pointer" name="vehicle1" value="Bike" />
            <label htmlFor={props.id} className='self-center ml-2 hover:cursor-pointer'> {props.text}</label>
        </div>)
}

export default SimpleCheckbox