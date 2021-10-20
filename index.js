const getSleepHours = (day) => {
    switch (day) {
        case 'Sunday':
            return 6
            break;
        case 'Monday':
            return 8
            break;
        case 'Tuesday':
            return 5
            break;
        case 'Wednesday':
            return 7.5
            break;
        case 'Thursday':
            return 9
            break;
        case 'Friday':
            return 8.5
            break;
        case 'Saturday':
            return 9
            break;
    }
}

const getActualSleepHours = () => {
    return getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday')
}

console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    let notEnough = idealSleepHours - actualSleepHours;
    let tooMuch = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
        console.log('You got just enough sleep!')
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You did not get enough sleep! You needed ' + notEnough + ' more hour(s) of sleep!');
    } else {
        console.log('You got more than enough sleep! You got an extra ' + tooMuch + ' more hour(s) of sleep!');
    }
}

console.log(calculateSleepDebt());


