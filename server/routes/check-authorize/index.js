import express from 'express';
export const checkAuthorize = express.Router();

const LOGIN = 'roman';
const PASSWORD = "1";


checkAuthorize.post('/', (request, response) => {
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