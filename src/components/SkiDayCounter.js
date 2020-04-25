import React from 'react';
import { calcGoalProgress } from '../utils'

const SkiDayCounter = (props) => {

    const { total, powder, backCountry, goal } = props;

    return (
        <div>
            <div>
                <p>Total Days : {total} </p>
            </div>
            <div>
                <p>Powder Days : {powder} </p>
            </div>
            <div>
                <p>Back Country : {backCountry}</p>
            </div>
            <div>
                <p>Total Goal : {goal}</p>
            </div>
            <div>
                <p>Goal Progress : {calcGoalProgress(total, goal)}</p>
            </div>

        </div>
    )
}

export default SkiDayCounter;