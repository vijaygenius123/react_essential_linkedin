import React from 'react';

const SkiDayCounter = (props) => {

    const { total, powder, backCountry, goal } = props;

    const getPercent = (decimal) => {
        return decimal * 100 + '%';
    }

    const calcGoalProgress = (total, goal) => {
        return getPercent(total / goal)
    }

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