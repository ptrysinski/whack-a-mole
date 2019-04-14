import React from 'react'

const Hole = (props) => {
    return (
        <div
            onClick={props.onUserClick}
            className={props.className}
        >

        </div>
    )
}

export default Hole