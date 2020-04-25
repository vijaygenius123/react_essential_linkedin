import React, { useState, useEffect } from 'react';

import Person from './Person';

const PeopleList = () => {

    const [people, setpeople] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch('https://randomuser.me/api?results=9')
            .then(response => response.json())
            .then(response => {
                setpeople(response['results'])
                setloading(false)
            })
    }, [])

    return (
        <div className="people-list">
            {
                loading && <h2>Loading...</h2>
            }
            {
                people && people.map(person =>
                    <Person key={person.login.uuid} {...person} />
                )
            }
        </div >
    )
}

export default PeopleList;