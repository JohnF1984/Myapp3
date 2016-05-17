var express = require('express');
var controller = require('./Facility.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/upvotes', controller.update_upvotes);
router.delete('/:id', controller.destroy);

module.exports = router;