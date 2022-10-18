const {
  createJobServices,
  getAllJobSpecificManagerServices,
} = require("../services/hiringManager.service");
const { findUserByEmail } = require("../services/user.service");

exports.createJob = async (req, res) => {
  try {
    const result = await createJobServices(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully Create a job",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't signed up",
      error: error,
    });
  }
};

exports.getAllJobsSpecificManager = async (req, res) => {
  try {
    const user = await findUserByEmail(req.user?.email);
    const result = await getAllJobSpecificManagerServices(user.id);
    res.status(200).json({
      status: "success",
      message: "Successfully get the data",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't get the jobs",
      error: error,
    });
  }
};
