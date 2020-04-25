import React from 'react'

const Person = (props) => (
    <div className="person">
        <h2 className={`${props.gender}`}>{props.name.first}, {props.name.last}</h2>
        <div className="info">
            <img src={`${props.picture.large}`} className="info-pic" alt='User Image' />
            <div className="info-details">
                <ul>
                    <li>Email : {props.email}</li>
                    <li>Age : {props.dob.age}</li>
                    <li>Country : {props.location.country}</li>

                </ul>
            </div>
        </div>

    </div>
)

export default Person