import api from "./api";

//Users
export async function GetUsers() {
    const { data } = await api.get(`/user`);
    return data;
}

export async function CreateUser(body) {
    console.log("no endpoint");
    const { data } = await api.post(`/user`, body);
    return data;
}

export async function UpdateUser(id, body) {
    const {data} = await api.put(`/user:${id}`, body);
    return data;
}
export async function DeleteUser(id) {
    const {data} = await api.delete(`/user:${id}`);
    return data;
}