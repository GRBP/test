import { request } from './request';
import { requestDemo } from './test';


export function getHomeMultidata() {
    // console.log('xxxxxxxxx');
    return request({
        url: '/home/multidata'
    })
}

export function getBillInfo() {
    // console.log('xxxxxxxxx');
    return requestDemo({
        url: '/bill/findByPage'
    })
}




export function getStudent() {
    return requestDemo({
        url: '/student/addStudent',
        method: 'post',
        data: {
            id: '1506401032',
            name: '吴嘉伟',
            sex: 1,
            phone: '15872353574',
            birthDate: '1997-11-15',
            address: '湖北省汉川市沉湖镇李花村',
            idCard: '421127199701225612',
            depId: '1506401031',
            depName: '电气工程及其自动化',
        }
    })
}

export function findStudent() {
    return requestDemo({
        url: '/student/findAll',
        method: 'post',
    })
}

export function delStudent() {
    return requestDemo({
        url: '/student/deleteStudent',
        method: 'get',
        params:{
            id:'1506401032',
        }
    })
}

export function editStudent() {
    return requestDemo({
        url: '/student/editStudent',
        method: 'post',
        data: {
            id: '1506401032',
            name: '许晓峰',
            sex: 1,
            phone: '15872353574',
            birthDate: '1997-01-22',
            address: '湖北省汉川市沉湖镇李花村',
            idCard: '421127199701225612',
            depId: '1506401031',
            depName: '电气工程及其自动化',
        },
    })
}
