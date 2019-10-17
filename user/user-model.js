const db = require("../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username", "department");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
    console.log(user)
  return db("users")
    .insert(user, 'id')
    .then(id => {
        console.log(id)
      findById(id);
    });
}

function findById(id) {
  console.log(id);
  return db("users")
    .where({ id })
    .first();
}
