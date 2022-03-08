const users = require('../db/users.json');
let sleepdata = require('../db/sleepdata.json');

function getUser(name) {
  return users.find((el) => el.name === name);
}

function createUser(id, name) {
  users.push({ name: name, id: id });
}

function getHighestUserId() {
  let maxId = 0;
  users.forEach((el) => {
    if (el.id > maxId) maxId = el.id;
  });
  return maxId;
}

function getUserById(id) {
  return users.find((el) => el.id == id);
}

function getSleepData(id) {
  return sleepdata.filter((el) => el.user_id == id);
}

function updateSleepData(id, object) {
  const toUpate = sleepdata.find((el) => el.id == id);
  toUpate.sleep = object.sleep;
  toUpate.wakeup = object.wakeup;
}

function deleteSleepData(id) {
  sleepdata = sleepdata.filter((el) => el.id != id);
}

function getHighestId() {
  let maxId = 0;
  sleepdata.forEach((el) => {
    if (el.id > maxId) maxId = el.id;
  });
  return maxId;
}

function createSleepData(id, obj) {
  sleepdata.push({
    id: id + 1,
    user_id: obj.userId,
    wakeup: obj.wakeup,
    sleep: obj.sleep,
    date: obj.date,
  });
}

module.exports = {
  getUser,
  getSleepData,
  getUserById,
  updateSleepData,
  deleteSleepData,
  getHighestId,
  createSleepData,
  getHighestUserId,
  createUser,
};
