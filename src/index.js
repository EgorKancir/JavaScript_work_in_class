function getUsers() {
    const response = fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(json => console.log(json));
    return response;
}

// getUsers();

function createUser(user) {
    const newUser = fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

const user = {
    nickname: 'zxc',
    email: 'zxc@zxc.com',
    password: 'zxc',
};

// createUser(user);

function patchUser() {
    const url = 'http://localhost:3000';
    const endpoint = '/users';
    const id = '25bb';

    fetch(`${url}${endpoint}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ password: 'roitjyoir' }),
    });
}
// patchUser();

const userAcount = {
    nickname: "Tom",
    age: 33,
    email: "tom@gmail.com"
}

function putUser() {
    const url = 'http://localhost:3000';
    const endpoint = '/users';
    const id = '25bb';

    fetch(`${url}${endpoint}/${id}`, {
        method: "PUT",
        body: JSON.stringify(userAcount),
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

putUser();