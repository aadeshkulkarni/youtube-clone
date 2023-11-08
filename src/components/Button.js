import React from 'react'

const Button = ({name}) => {
    return (<div>
        <button className="ml-4 px-3 py-1 rounded-lg bg-gray-100 font-medium">{name}</button>
    </div>
    )
}

export default Button