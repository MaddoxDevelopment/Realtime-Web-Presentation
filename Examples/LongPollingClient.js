const axios = require('axios').default;

async function getDate() {
    const {data} = await axios.get("http://localhost:3000/date");
    console.log('Recieved', data);
    getDate();
}

getDate();