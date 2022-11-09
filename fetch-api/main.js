const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(data => data.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/1`)
    .then(data => data.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio do Sul"
}

function addUser(user=newUser) {
    fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
    })
    .then(data => data.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updateUser = {
    name: "Marcelo Clovis",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

function updatUser(id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(data => data.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(data => data.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}
