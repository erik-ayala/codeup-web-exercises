const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let usersWithLanguages = users.filter(function (user){
//     return user.languages.length >= 3;
// });
//
// console.log(usersWithLanguages);
//
// let emails = users.map(function (user => user.email);
//
// console.log(emails);
//
// let averageYrs = users.reduce((accumilator, currentVal){
//     return accumilator + currentVal.yearsOfExperience;
// }, 0) /users.length;
//
// console.log(averageYrs)

let emails = users.map(user => user.email);
console.log(emails)

let longestEmail = emails.reduce((accumulator, currentValue ))