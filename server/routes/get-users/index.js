import express from 'express';
export const getUsers = express.Router();


getUsers.get('/', (request, response) => {
  setTimeout(() => {
    response.json([{
      id: 1,
      username: "samsepi0l"
    }, {
      id: 2,
      username: "D0loresH4ze"
    }]);
  }, 5000);
});
