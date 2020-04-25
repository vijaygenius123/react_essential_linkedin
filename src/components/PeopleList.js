import React, { useState, useEffect } from 'react';

import Person from './Person';

const PeopleList = () => {

    const [people, setpeople] = useState([])
    const [filteredPeople, setfilteredPeople] = useState([])
    const [name, setname] = useState('')
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch('https://randomuser.me/api?results=30')
            .then(response => response.json())
            .then(response => {
                setpeople(response['results'])
                setfilteredPeople(response['results'])
                setloading(false)
            })
    }, [])

    const handleInput = (e) => {
        setname(e.target.value)
        if (e.target.value !== '') {
            const newPeople = people.filter(person => person.name.first.includes(e.target.value) || person.name.last.includes(e.target.value))
            setfilteredPeople(newPeople)
        }
        else {
            setfilteredPeople(people)
        }
    }

    return (
        <div >
            <div className="filter-form">
                <label htmlFor="filter">Filter</label>
                <input type="text" name="filter" id="filter" onChange={handleInput} />
            </div>
            <div className="people-list">
                {
                    loading && <h2>Loading...</h2>
                }
                {
                    filteredPeople && filteredPeople.map(person =>
                        <Person key={person.login.uuid} {...person} />
                    )
                }
            </div >
        </div>
    )
}

export default PeopleList;