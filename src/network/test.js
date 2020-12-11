import axios from 'axios';

export function requestDemo(config) {
    const instance = axios.create({
        baseURL: '/api',
        timeout: 5000000,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })

    // console.log('xxxxxxxxxxxxxxx');
    return instance(config);
}