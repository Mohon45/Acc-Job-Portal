const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Job = require("../models/Job");

exports.createJobServices = async (data) => {
  const result = await Job.create(data);
  return result;
};

exports.getAllJobSpecificManagerServices = async (id) => {
  const result = await Job.find({ "hiringManager.id": id });
  return result;
};
