import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8',
        timeout: 5000,
    })

    // console.log('xxxxxxxxxxxxxxx');
    return instance(config);
}

// export function request2(config){
//     const instance =axios.create({
//         baseURL:'xxxxxxxxxxxxxxx',
//         timeout:5000,
//     })

//     return instance(config);
// }

// reques2t({
//     url:'xxxxxxxxxx'
// }).then(res =>{

// })

