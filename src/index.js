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
    const id = '8f4c';

    fetch(`${url}${endpoint}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ password: 'roitjyoir' }),
    });
}
// patchUser();

function putUser() {
    const url = 'http://localhost:3000';
    const endpoint = '/users';
    const id = '1b49';

    const user = {
        name: 'NewUser',
        password: 'newPassword',
        email: 'newEmail',
    };

  // http://localhost:3000/users/d023
    fetch(`${url}${endpoint}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

// putUser();
function deleteUser() {
    const url = 'http://localhost:3000';
    const endpoint = '/users';
    const id = 'db0f';

    fetch(`${url}${endpoint}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

// deleteUser();