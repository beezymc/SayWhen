const Router = require('express');
const router = Router();
const controllers = require('./controllers.js');


//get, add, schedule, editAvailability, editActivity, removeActivity (user, or friend)
router.get('/api/availability/:username', controllers.getAvailability);
router.post('/api/availability', controllers.addAvailability);
router.post('/api/schedule/:username', controllers.scheduleActivity);
// router.put('/api/edit/:activityid', controllers.editActivity);
// router.delete('/api/remove/:activityid', controllers.removeActivity);

module.exports = router;