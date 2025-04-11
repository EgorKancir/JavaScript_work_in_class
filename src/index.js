import axios from 'axios';
// async - ця функція буде асинхронною
const getImgs = async () => {
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

    try {
        const { data } = await axios.get(
            'https://pixabay.com/api/?key=37133631-8f51e9c6f744fc90bf0fea549&q=yellow+flowers&image_type=photo'
        );
        console.log(data.hits);
    } catch (error) {
        console.log(error);
    }
};

getImgs();