export const getPercent = (decimal) => {
    return `${decimal * 100}%`
}

export const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal)
}