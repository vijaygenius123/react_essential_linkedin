import React, { useState, useEffect } from 'react';

const PeopleList = () => {

    const [people, setpeople] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch('https://randomuser.me/api?results=20')
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
                    <div key={person.login.uuid} className="person">
                        <h2>{person.name.first}, {person.name.last}</h2>
                    </div>)
            }
        </div >
    )
}

export default PeopleList;