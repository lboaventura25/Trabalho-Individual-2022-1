import axios from 'axios';


export async function createBook(
    title, author, release_year, user
  ) {
    try {
      const response = await axios.post('https://library-gces-back.herokuapp.com/api/books/', {
        title: title,
        author: author,
        release_year: release_year,
      });
      return response;
    } catch (error) {
      if (error.response.status === 500) {
        alert('Você precisa estar logado para doar um livro');
      } else if (error.response.status !== 401) {
        alert('Não foi possivel realizar o cadastro do livro.');
      }
      console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
  }


export async function getBooks() {
    try {
      const response = await axios.get('https://library-gces-back.herokuapp.com/api/books/');
      return response;
    } catch (error) {
      if (error.response?.status === 500) {
        alert('Você não está logado, por favor faça o seu login na aplicação.');
      }
      console.error(`An unexpected error ocourred while retrieving the clients list.${error}`);
    }
    return false;
  }

export async function rentBooks(bookId, renterId) {
  try {
    const response = await axios.post(`https://library-gces-back.herokuapp.com/api/books/${bookId}/rent/`, {
      renter: renterId,
    });
    return response;
  } catch (error) {
    if (error.response?.status === 500) {
      alert('Você não está logado, por favor faça o seu login na aplicação.');
    }
    console.error(`An unexpected error ocourred while retrieving the clients list.${error}`);
  }
  return false;
}

export async function rentedUserBooks(renterId) {
  try {
    const response = await axios.get(`https://library-gces-back.herokuapp.com/api/books/?renter=${renterId}`);
    return response;
  } catch (error) {
    if (error.response?.status === 500) {
      alert('Você não está logado, por favor faça o seu login na aplicação.');
    }
    console.error(`An unexpected error ocourred while retrieving the clients list.${error}`);
  }
  return false;
}