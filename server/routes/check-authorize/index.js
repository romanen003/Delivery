import express from 'express';
export const checkAuthorize = express.Router();

const LOGIN = "1";
const PASSWORD = "1";

checkAuthorize.post('/check-auth', (request, response) => {
    const {login, password} = request.body;

    setTimeout(() => {
        if (login.toString() === LOGIN && password.toString() === PASSWORD){
            const Data = {
                name: 'Roman',
                last_name: 'Gusev'
            };
            return response.status(200).json(Data);
        }
        return response.status(401).send('incorrect login or password')
    }, 2000, login, password);
});
