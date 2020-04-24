import React from 'react';
import './App.css'

import SkiDayCounter from './components/SkiDayCounter'


const data = {
    total: 50,
    powder: 20,
    backCountry: 10,
    goal: 100
}

const App = () => (
    <div className="App">
        <h1>Ski Day Counter</h1>
        <SkiDayCounter {...data} />
    </div>
)

export default App;