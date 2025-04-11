// all();


// const one = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(text);
//         }, delay);
//     })
// }

// const promiseA = one('Promise one', 1000);
// const promiseB = one('Promise two', 2000);

// Promise.all([promiseA, promiseB])
//     .then(value => {console.log(value)})
//     .catch(error => {console.error(error)});


// race();


// const one = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(text);
//         }, delay);
//     })
// }

// const promiseA = one("First promise", 3000);
// const promiseB = one("Second promise", 1500);

// Promise.race([promiseA, promiseB])
//     .then(value => {console.log(value)})
//     .catch(error => console.error(error)); //Second promise


// any();


// Promise.any([
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Помилка!"));
//         }, 1000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 2000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(3);
//         }, 2000);
//     })
// ])
//     .then(alert);

// Promise.any([
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Помилка!"));
//         }, 1000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Проблем!"));
//         }, 2000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Не туди!"));
//         }, 4000);
//     }),
// ])
//     .catch(error => {
//         console.log(error.constructor.name), 
//         console.log(error.errors[0]), 
//         console.log(error.errors[2])
//     });


// resolve(); reject();


// new Promise(resolve => resolve('success')).then(value => console.log(value));
// Promise.resolve("seccess").then(value => console.log(value));

// new Promise((resolve, reject) => {
//     reject('error');
// }).catch(error => {console.error(error)});
// Promise.reject('error').catch(error => {console.error(error)});

// const makeGreeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return {
//             success: false,
//             message: "Guest name is not found"
//         }
//     }
//     return { 
//         success: true,
//         message: `Welcome ${guestName}`
//     }
// }

// const result = makeGreeting('Bob');

// if (result.success) {
//     console.log(result.message);
// } else {
//     console.log(result.message);
// }


// const makeGreeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return Promise.reject("Guest name is not found");
//     }
//     return Promise.resolve(`Welcome ${guestName}`);
// }

// makeGreeting('Bob')
//     .then(greeting => console.log(greeting))
//     .catch(error => console.error(error));


// EX

const hourses = ["Milka", "Zorita", "Lastunka", "Rariti", "PinkiPay"];
let raceCounter = 0;
const refs = {
    startBtn: document.querySelector(".js-start-race"),
    winnerField: document.querySelector(".js-winner"),
    progressField: document.querySelector(".js-progress"),
    tableBody: document.querySelector(".js-results-table > tbody"),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
    raceCounter += 1;
    const promises = hourses.map(run);
    updateWinnerField('');
    updateProgressField('Заїзд розпочався ставки не приймаються!');
    deterWinner(promises);
    waitAll(promises);
}

function deterWinner(hoursesP) {
    Promise.race(hoursesP).then(({hourse, time}) => {
        updateWinnerField(`Переможець ${hourse}, фінішував за ${time}!`);
        updateResultsTable({hourse, time, raceCounter});
    });
}

function waitAll(hoursesP) {
    Promise.all(hoursesP).then(() => {
        updateProgressField(`Заїзд закінчино ставки не приймаются!`);
    })
}

////////////////////////////////////////////////

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}
function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function updateResultsTable({hourse, time, raceCounter}) {
    const tr = `
    <tr>
        <td>${raceCounter}</td>
        <td>${hourse}</td>
        <td>${time}</td>
    </tr>
    `;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

////////////////////////////////////////////////

function run(hourse) {
    return new Promise(resolve => {
        const time = getRondomTime(2000, 3500);
        setTimeout(() => {
            resolve({hourse, time});
        }, time);
    })
}

function getRondomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}