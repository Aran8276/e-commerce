import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SelfProps = {
    text: string,
    icon: any,
}

function ContactCards(props: SelfProps) {
    return (
        <a href="" className="flex bg-blue-700 bg-opacity-95 rounded-md hover:bg-blue-800 active:bg-gray-900 text-white space-x-3 p-3 w-full">
            <FontAwesomeIcon icon={props.icon} className="text-[3rem] self-center" />
            <span className="self-center">{props.text}</span>
        </a>)
}

export default ContactCards