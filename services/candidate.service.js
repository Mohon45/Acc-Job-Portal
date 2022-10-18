const Job = require("../models/Job");

exports.getAllJobsServices = async (filters, queries) => {
  const result = await Job.find(filters).sort(queries.sortBy);
  return result;
};

exports.getJobDetailsByIdServices = async (id) => {
  const result = await Job.findOne({ _id: id });
  return result;
};

exports.applyJobServices = async () => {};
