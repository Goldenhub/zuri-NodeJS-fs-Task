//node-fetch
//file system (fs)

const fs = require('fs');
const fetch = require('node-fetch');

const url = 'http://jsonplaceholder.typicode.com/posts';
fetch(url)
.then(response => response.json())
.then(json => {
    let data = JSON.stringify(json);
    fs.writeFile('result/posts.json', data, (err) => {
        if(err) throw err;
        console.log('Data fetched and file created successfully');
    })
})
.catch(err => {
    console.log('Error encountered', err);
});