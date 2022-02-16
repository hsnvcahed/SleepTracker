const asyncHandler = require('express-async-handler');
const model = require('../model/main');

const getUser = asyncHandler(async (req, res) => {
  const username = req.params.name;
  const modelRes = model.getUser(username) || model.getUserById(username);
  res.status(200).json(modelRes);
});

const getSleepData = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const modelRes = model.getSleepData(userId);
  res.status(200).json(modelRes);
});

module.exports = { getUser, getSleepData };
