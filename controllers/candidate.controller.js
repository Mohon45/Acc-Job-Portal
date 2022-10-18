const {
  getAllJobsServices,
  getJobDetailsByIdServices,
} = require("../services/candidate.service");

exports.getAllJobs = async (req, res) => {
  try {
    let filters = { ...req.query };
    //sort , page , limit -> exclude
    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    //gt ,lt ,gte .lte
    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filtersString);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    const result = await getAllJobsServices(filters, queries);

    res.status(200).json({
      status: "success",
      message: "Successfully get the job",
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

exports.getJobDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getJobDetailsByIdServices(id);
    result.hiringManager.id = undefined;

    res.status(200).json({
      status: "success",
      message: "Successfully get the job details",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't get the jobs Details",
      error: error,
    });
  }
};

exports.applyJob = (req, res) => {
  try {
    console.log(req.params);
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't Apply this Job",
      error: error,
    });
  }
};
