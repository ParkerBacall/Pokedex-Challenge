import React from 'react'
import Type from './Type'

export default function TypeList({types}) {

    const showType = types.map(type => {
        return <Type type={type}/>
    })

    return (
        <div className="typeList">
            <h4>Type:</h4>
            {showType}
        </div>
    )
}
