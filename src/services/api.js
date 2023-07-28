import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY4Njk4NjU5OH0.0oDQyRr_d5JyaTmQsq6oqtiD-sXp3zbpEX4IlNEFtVZHoJUYLkJt1IO-2jpC9WQeqBfNO6SYKiioBHuOfry4Qg"
  }
});
