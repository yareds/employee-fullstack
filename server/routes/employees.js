const router = require("express").Router();
const Employee = require("../model/employees");

/* ADD Employee */
router.post("/addemployee", async (req, res) => {
  const newEmployee = new Employee({
    img: req.body.img,
    name: req.body.name,
    occupation: req.body.occupation,
  });
  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET Employee */
router.get("/allemployees", async (req, res) => {
  try {
    const result = await Employee.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
/* UPDATE Emploee */

router.put("/:id", async (req, res) => {
  try {
    const updateEmployee = await Employee.findOneAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE Employee */

router.delete("/:id", async (req, res) => {
  try {
    await Employee.findOneAndDelete(req.params.id);
    res.status(200).json(" The employee has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
