import axios from 'axios';


export async function registerAccount(
    firstName, lastName, email, username, password
  ) {
    try {
      const response = await axios.post('https://library-gces-back.herokuapp.com/auth/register/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
      });
      return response;
    } catch (error) {
      if (error.response.status !== 401) {
        alert('Não foi possivel realizar o cadastro.\nA senha precisa ter 8 caracteres\nE o email ser estruturado por xxxx@xxxx.xxx');
      }
      console.error(`An unexpected error ocourred while creating a new client.${error}`);
    }
    return false;
  }

export async function login(
  username, password
) {
  try {
    const response = await axios.post('https://library-gces-back.herokuapp.com/auth/login/', {
      username: username,
      password: password
    });
    return response;
  } catch (error) {
    if (error.response.status !== 401) {
      alert('Não foi possivel realizar o Login.');
    }
    console.error(`An unexpected error ocourred while creating a new client.${error}`);
  }
  return false;
}