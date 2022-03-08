const express = require('express');
const {
  getUser,
  getSleepData,
  updateSleepData,
  deleteSleepData,
  createSleepData,
} = require('../controllers/main.js');
const webpush = require('web-push');

require('dotenv').config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('mailto:hasanovic.a02@htlwienwest.at', publicVapidKey, privateVapidKey);
const subscription = [];

const router = express.Router();

router.get('/user/:name', getUser);
router.get('/sleepdata/:id', getSleepData);

router.post('/subscribe', (req, res) => {
  subscription.push(req.body);
  res.status(201).end();
});

router.patch('/time/:id', updateSleepData);
router.delete('/time/:id', deleteSleepData);
router.post('/time', createSleepData);

router.post('/notify', (req, res) => {
  const payload = JSON.stringify({ title: 'Push Test 1', body: req.body });
  for (const sub of subscription) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = router;
