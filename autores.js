const request = require('request')

const BASE_URL = 'https://goodreads-devf-aaron.herokuapp.com/'

function createAuthor(name, last_name, biography, gender, age){
    const jsonToSend = {
        name,
        last_name,
        biography,
        gender,
        age
    }

    request.post()
}