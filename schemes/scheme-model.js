const db = require("../data/db.config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
};

function find() {
  return db("Schemes");
}

function findById(id) {
  return db("Schemes").where("id", "=", id);
}

function findSteps(id) {
  return db("Schemes")
    .from("steps")
    .where("id", "=", id);
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("Schemes")
    .update(changes)
    .where("id", "=", id);
}

function remove(id) {
  return db("Schemes")
    .where("id", "=", id)
    .del();
}

function addStep(scheme_id, newStep) {
  return db("Steps")
    .where(scheme_id)
    .insert(newStep);
}
