import React from 'react'
import Weakness from './Weakness'

export default function WeaknessList({weaknesses}) {

    const showWeakness = weaknesses.map(weakness => {
        return <Weakness weakness={weakness}/>
    })

    return (
        <div className="weaknessList">
            <h4>Weaknesses:</h4>
            {showWeakness}
        </div>
    )
}
