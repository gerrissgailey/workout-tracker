const router = require ("express").Router();
const {Workout} = require ("../models");

router.get("/api/workouts", function(req, res) {
    Workout.find()
})
router.put("/api/workouts/:id", function(req, res) {
    
})
router.post("/api/workouts", function(req, res) {
    
})
router.get("/api/workouts/range", function(req, res) {
    
})

module.exports = router