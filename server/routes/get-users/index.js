import express from 'express';
export const getUsers = express.Router();

const LOGIN = 'roman';
const PASSWORD = "1";

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

getUsers.post('/', (request, response) => {
    const {login, password} = request.body;
    setTimeout(() => {
        if (login === LOGIN && password === PASSWORD){
            const Data = {
                name: 'Roman',
                last_name: 'Gusev'
            };
            return response.json(Data);
        }
        return response.status(401).send('incorrect login or password')
    }, 5000);
});
