import axios from 'axios';
import debounce from 'debounce';
// async - ця функція буде асинхронною
// const getImgs = async valueFormInput => {
  // const img = fetch(
  //   'https://pixabay.com/api/?key=37133631-8f51e9c6f744fc90bf0fea549&q=yellow+flowers&image_type=photo'
  // );
  // console.log(img);
  // img
  //   .then(value => {
  //     return value.json();
  //   })
  //   .then(date => {
  //     console.log(date);
  //   });

  // async await
  // try catch

//     try {
//         const { data } = await axios.get(
//             `https://pixabay.com/api/?key=37133631-8f51e9c6f744fc90bf0fea549&q=${valueFormInput}&image_type=photo`
//         );
//         makeHtml(data.hits);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getImgs();

// const searchInput = document.getElementById("query");
// const imagesList = document.querySelector(".imgs-list");

// searchInput.addEventListener("input", debounce(searchFotos, 250));

// function searchFotos(e) {
//     const value = searchInput.value;
//     getImgs(value);
// }

// searchFotos();



// function makeHtml(imgs) {
//     const markup = imgs.map(img => {
//         return `<li class="imgs-item">
//             <img src="${img.webformatURL}">
//         </li>`;
//     }).join();

//     imagesList.innerHTML = markup;
// }


const searchInput = document.getElementById("query");
const imagesList = document.querySelector(".imgs-list");

async function getName(valueInput) {
    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${valueInput}`);
        makeHtml(data);
    } catch (error) {
        console.error(Error);
    }
}

function makeHtml(countrys) {
    const markup = countrys.map(country => {
        return `
            <li class="imgs-item">
                <h2 class="country-name">${country.name.common}</h2>
                <img class="country-flag" src="${country.flags.png}">
            </li>
        `;
    });
    imagesList.innerHTML = markup;
}

function searchCountry(e) {
    const value = searchInput.value;
    getName(value);
}

searchInput.addEventListener("input", debounce(searchCountry, 250));