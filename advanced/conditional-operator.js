// const myAge = 27;
// const message =  myAge >= 18 ? 'You can vote.' : 'You cannot vote.'
// console.log(message);

const myAge = 19;
const showPage = () => {
    return 'showing the page';
}

const showErrorPage = () => {
    return 'Showin he error page';
}

const message = myAge >= 21 ? showPage() : showErrorPage();
myAge >= 21 ? showPage() : showErrorPage();

const team = ['tyler', 'porter'];

const showTeam = (team) => {
    return `Team size: ${team.length}`;
}

const

const message = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team';
console.log(message)