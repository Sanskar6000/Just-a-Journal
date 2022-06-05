const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const entryController = require('../controllers/entryController.js');

// We use this technique to link various requests on one route -> Chained Route Handlers
// Passing Middleware auth
router
  .route('/')
  .get(auth, entryController.getEntries)
  .post(auth, entryController.createEntries);

router
  .route('/:id')
  .get(auth, entryController.getEntry)
  .put(auth, entryController.updateEntries)
  .delete(auth, entryController.deleteEntries);

module.exports = router;
