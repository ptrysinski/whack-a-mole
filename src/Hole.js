import React from 'react'

const Hole = (props) => {
    return (
        <div
            onClick={props.countScores}
            className={props.className}
        >

        </div>
    )
}

export default Hole