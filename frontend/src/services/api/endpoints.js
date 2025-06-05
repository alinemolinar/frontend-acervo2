import api from "./api";

//Users
export async function GetUsers() {
    const { data } = await api.get(`/usuarios`);
    return data;
}

export async function CreateUser(body) {
    console.log("no endpoint");
    const { data } = await api.post(`/usuarios`, body);
    return data;
}

export async function UpdateUser(id, body) {
    const {data} = await api.put(`/usuarios:${id}`, body);
    return data;
}
export async function DeleteUser(id) {
    const {data} = await api.delete(`/usuarios:${id}`);
    return data;
}

//Sessoes
export async function GetSessoes() {
    const { data } = await api.get(`/sessoes`);
    return data;
}

export async function CreateSessao(body) {
    console.log("no endpoint");
    const { data } = await api.post(`/sessoes`, body);
    return data;
}

export async function DeleteSessao(id) {
    const {data} = await api.delete(`/sessoes:${id}`);
    return data;
}