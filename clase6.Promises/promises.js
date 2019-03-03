miFirstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = 5;
            number > 5 ? resolve("resolved success") : reject('promise rejected')
        }, 3000)
    })
}

miFirstPromise()
    .then((message) => {
        console.log(message)
    })
    .catch((err) => {
        console.log(err)
    })