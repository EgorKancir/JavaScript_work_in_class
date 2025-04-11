// GET - отримати дані
// POST - Додати інформацію на сервер
// PUT - Оновлення даних(Видалити та на місце видаленого додати нове)
// PATCH - Оновлення даних(Конкретної частини)
// DELETE - Видалення даних

const post = {
    text: 'text',
};

// const data = fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   body: JSON.stringify(post),
//   // headers: {
//   //   'content-type': 'application/json',
//   // },
// });
// data
//   .then(value => {
//     // Відповідь від сервера шо все круто
//     // Форматування даних
//     console.log(value);

//     return value.json();
//   })
//   .then(value => {
//     // ОТримуємо та працюємо з даними
//     console.log(value);
//   })
//   .catch(error => {
//     // Обробка помилки
//     console.log(error);
//   });

// https://newsapi.org/v2/ - шлях до бекенду
// /top-headlines - ендпоінт
// ?country=us&apiKey=2667a6ad789c4db2a2e882b6e2781cbb
const news = fetch(
    'https://newsapi.org/v2/top-headlines?q=BMW&apiKey=2667a6ad789c4db2a2e882b6e2781cbb'
);

news
    .then(value => {
    // Відповідь від сервера шо все круто
    // Форматування даних
        console.log(value);

        return value.json();
    })
    .then(value => {
    // ОТримуємо та працюємо з даними
        console.log(value);
    })
    .catch(error => {
    // Обробка помилки
        console.log(error);
    });

