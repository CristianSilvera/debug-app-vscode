const users = ['Diego', 'Luis', 'Carlos', "Valeria"];

export function getUsers () {
    // return users;

    return []; // retorna vacío, error generado para debugging
}

export function addUser(user) {
    users.push(user);
}