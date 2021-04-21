import Axios from 'axios';
const axios = Axios.create();
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function xhspost (url , param){
    return axios.post(url,param).then( response => response.data);
}

/*
export default axios;*/