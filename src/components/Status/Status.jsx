import React from 'react'
import './status.css'

const percentage = [
    {
        color: 'first',
        percentage: '36%'
    },
    {
        color: 'second',
        percentage: '24%'
    },
    {
        color: 'third',
        percentage: '20%'
    },
    {
        color: 'fourth',
        percentage: '20%'
    }
]


const Status = () => {


    return (
        <>
            <div className="container d-flex mt-md-4 mt-3">
                <div style={{width:`${percentage[0].percentage}`}} className='first text-center'><div className="h6 statusName pt-2">{percentage[0].percentage}</div></div>
                <div style={{width:`${percentage[1].percentage}`}} className='second text-center'><div className="h6 statusName pt-2">{percentage[1].percentage}</div></div>
                <div style={{width:`${percentage[2].percentage}`}} className='third text-center'><div className="h6 statusName pt-2">{percentage[2].percentage}</div></div>
                <div style={{width:`${percentage[3].percentage}`}} className='fourth text-center'><div className="h6 statusName pt-2">{percentage[3].percentage}</div></div>
            </div>
        </>
    )
}

export default Status