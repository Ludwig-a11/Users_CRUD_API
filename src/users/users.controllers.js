const uuid = require('uuid');

const usersDB = [
  {
    id: 'cf5c5a25-bcbd-4f74-b997-67a7b8923c24',
    first_name:'Ludwig',
    last_name: 'Zarza',
    email: 'ludwig.zarza@backend.com',
    password:'ludwig',
    birthday: '1990/06/21' 

  },
  {
    id: 'd27f20fc-da5b-40e8-a6f6-4a85527705c5',
    first_name: 'Boue',
    last_name: 'Mora',
    email: 'boue.mora@backend.com',
    password:'boue',
    birthday: '1990/06/22'
  }
];

const getAllUsers = () => {
  return usersDB
};

const getUserById = (id) => {
  const data = usersDB.find(user => user.id === id)
  return data
};

const createUser = (first_name) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday
  }
  usersDB.push(newUser)
  return newUser
}
