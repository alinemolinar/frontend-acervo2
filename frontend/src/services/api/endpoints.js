import api from "./api";

//Users
export async function GetUsers() {
    const { data } = api.get("/user");
    return data;
}

export async function CreateUser(body) {
    console.log("no endpoint");
    const { data } = api.post(`/user`, body);
    return data;
}

export async function UpdateUser(id, body) {
    const {data} = api.put(`/user:${id}`, body);
    return data;
}
export async function DeleteUser(id) {
    const {data} = api.delete(`/user:${id}`);
    return data;
}