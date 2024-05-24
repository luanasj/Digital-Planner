const express = require('express')
const routesControllers = require("./notes.controllers.js")

const router = express.Router()


router.route("/").get(getWeekGoalsAndTasks).get(getSchedule).get(getContacts).post(createGoalOrTask).post(createContact).patch(updateSchedule);
router.route("/:id").patch(updateContacts).patch(updateGoalsAndTasks).delete(deleteGoalsAndTasks).delete(deleteContact);

export default router;