const newsList = document.getElementById('newsList');
const pagList = document.querySelector('.pagination-list');
const loadMoreButton = document.getElementById('load');

// const fetchNews = async (sourse = 'techcrunch') => {
//   try {
//     console.log(sourse);
//     const newsData = await fetch(
//       `https://newsapi.org/v2/top-headlines?sources=${sourse}&apiKey=2667a6ad789c4db2a2e882b6e2781cbb`
//     );
//     const { articles } = await newsData.json();

//     makeHtml(articles);
//   } catch (error) {}
// };

// fetchNews();
// // document.addEventListener('DOMContentLoaded', fetchNews);

// function makeHtml(news) {
//   const markup = news
//     .map(news1 => {
//       return `<li class="news-item">
//     <h1>${news1.title}</h1>
//     <p>${news1.author}</p>
//     <p>${news1.content}</p>
//     </li>`;
//     })
//     .join();

//   // newsList.innerHTML = markup;
//   newsList.insertAdjacentHTML('beforeend', markup);
// }

// const pagination = async params => {
//   const sources = ['aftenposten', 'ars-technica', 'bbc-news', 'techcrunch'];
//   const randomSource = Math.floor(Math.random() * sources.length);
//   await fetchNews(sources[randomSource]);
// };
// loadMoreButton.addEventListener('click', pagination);

const url = 'https://rickandmortyapi.com/api';
let page = 2;

const fetchMovieCharacters = async (page = 1) => {
    try {
        const newsData = await fetch(`${url}/character?page=${page}`);
        console.log(newsData.json());
        const { results, info } = await newsData.json();
        makeHtml(results, info.pages);
    } catch (error) {}
};

function makePagination(countOfPages) {
    const numbers = [];
    for (let i = 1; i <= countOfPages; i++) {
        numbers.push(i);
    }
    renderPagination(numbers);
}

fetchMovieCharacters(page);

function renderPagination(numbers) {
    const markup = numbers.map(number => {
        return `<li class="pag-item">
                    <a class="pag-link">${number}</a>
                </li>`;
    }).join();

    pagList.innerHTML = markup;
    // pagList.insertAdjacentHTML('beforeend', markup);
}

function makeHtml(characters, numberOfPages) {
    const markup = characters.map(character => {
        return `
        <li class="news-item">
            <img src="${character.image}" />
            <h1>${character.name}</h1>
            <p>${character.species}</p>
            <p>${character.status}</p>
        </li>
        `;
    })
    .join();
    makePagination(numberOfPages);

    newsList.innerHTML = markup;
  // newsList.insertAdjacentHTML('beforeend', markup);
}

loadMoreButton.addEventListener('click', async () => {
    page++;
    console.log(page);
  // page += 1;
  // page = page + 1;
    fetchMovieCharacters(page);
});

pagList.addEventListener('click', async e => {
    if (!e.target.classList.contains('pag-link')) return;
    page = Number(e.target.textContent);

    fetchMovieCharacters(page);
});

// 1) Ми хочемо відпрацювати INTersection observer під час завантаження сторінка

// document.addEventListener('DOMContentLoaded', e => {
//   const cards = Array.from(document.querySelectorAll('.card'));
//   const container = document.querySelector('.container');
//   // 2)Ми перевіряєм чи є у користувача доступ до INTersection observer
//   // if (!"IntersectionObserver" in window) return;
//   if ('IntersectionObserver' in window) {
//     //   3)Створити екземпляр класу  IntersectionObserver
//     const observer = new IntersectionObserver(entryArr => {
//       entryArr.forEach(entry => {
//         // 5) Зрозуміти,що користувач бачить карточку
//         //   entry.isIntersecting === true - користувач має бачити картку
//         if (entry.isIntersecting === true) {
//           // 6) Логіка(що ми хочемо робити коли бачимо карточки)
//           // entry.target - елемент який ми бачимо

//           const card = entry.target;
//           if (!card.classList.contains('show')) {
//             card.classList.add('show');
//             observer.unobserve(card);
//           }
//         }
//       });
//     });

//     //   7)Для нескінченного скролу нам необхідно слідкувати за останнім елементом
//     const lastElementObserver = new IntersectionObserver(entryArr => {
//       // 9)Генерити нові карточки
//       const lastElement = entryArr[0];
//       if (!lastElement.isIntersecting) return;
//       newCards(55);
//       lastElementObserver.unobserve(lastElement.target);
//       lastElementObserver.observe(document.querySelector('.card:last-child'));
//     });

//     //   4)Ми маємо повідомити обсерверу, що ми хочемо відслідковувати
//     // 8) Даємо нашому observery інформацію що він має відслідковувати(останній елемент)

//     lastElementObserver.observe(document.querySelector('.card:last-child'));

//     function newCards(quantity) {
//       page++;
//       fetchMovieCharacters(page);
//     }

//     cards.forEach(card => {
//       observer.observe(card);
//     });
//   } else {
//     console.log('Оновіть браузер');
//   }
// });