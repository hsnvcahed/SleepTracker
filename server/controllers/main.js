const asyncHandler = require('express-async-handler');
const model = require('../model/main');

const getUser = asyncHandler(async (req, res) => {
  const username = req.params.name;
  const modelRes = model.getUser(username) || model.getUserById(username);
  if (!modelRes) {
    const id = model.getHighestUserId();
    model.createUser(id + 1, req.params.name);
    res.status(200).json({ id: id + 1 });
  } else res.status(200).json(modelRes);
});

const getSleepData = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const modelRes = model.getSleepData(userId);
  res.status(200).json(modelRes);
});

const updateSleepData = asyncHandler(async (req, res) => {
  const dataId = req.params.id;
  model.updateSleepData(dataId, req.body);
  res.status(200).end();
});

const deleteSleepData = asyncHandler(async (req, res) => {
  const dataId = req.params.id;
  model.deleteSleepData(dataId);
  res.status(200).end();
});

const createSleepData = asyncHandler(async (req, res) => {
  const dataId = model.getHighestId();
  model.createSleepData(dataId, req.body);
  res.status(200).end();
});

module.exports = { getUser, getSleepData, updateSleepData, deleteSleepData, createSleepData };
