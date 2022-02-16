const users = require('../db/users.json');
const sleepdata = require('../db/sleepdata.json');

function getUser(name) {
  return users.find((el) => el.name === name);
}

function getUserById(id) {
  return users.find((el) => el.id == id);
}

function getSleepData(id) {
  return sleepdata.filter((el) => el.user_id == id);
}

module.exports = { getUser, getSleepData, getUserById };
