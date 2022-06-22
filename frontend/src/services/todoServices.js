import axios from 'axios';
const apiUrl = "http://localhost:8080/todo";


export function getTodo(){
    return axios.get(apiUrl);
}


export function addTodo(todo){
    return axios.post(apiUrl, todo);
}

export function updateTodo(id, todo){
    return axios.put(apiUrl + "/" + id, todo);
}

export function deleteTodo(id){
    return axios.delete(apiUrl + "/" + id);
}


