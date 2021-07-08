let doggo = fetch('https://dog.ceo/api/breeds/image/random”')
    doggo.then(response => console.log(response));
    doggo.catch(error => console.error(error));

console.log(doggo.then);