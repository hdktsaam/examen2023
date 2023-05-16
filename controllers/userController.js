const db = require("../databank");

const getUsers = (req, res) => {
  db.all("Select * from user", [], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: rows });
  });
};

const addUser = (req, res) => {
  db.run(
    "insert into user (userName) values (?)",
    [req.body.userName],
    (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: "Ok" });
    }
  );
};

module.exports = {
  getUsers,
  addUser,
};
