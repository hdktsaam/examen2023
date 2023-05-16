const db = require("../databank");

const getLessen = (req, res) => {
  db.all(
    "select * from user u join lessen l on u.user_id = l.user_id where l.user_id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.json({ message: err.message });
      res.json({ user_id: req.params.id, lessen: rows });
    }
  );
};

const addLes = (req, res) => {
  const newLes = {
    user_id: req.body.user_id,
    omschrijvingKort: req.body.kort,
    omschrijvingLang: req.body.lang,
  };
  db.run(
    "insert into user (user_id, omschrijvingKort, omschrijvingLang) values (?)",
    [newLes.user_id, newLes.omschrijvingKort, newLes.omschrijvingLang],
    (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: "Ok" });
    }
  );
};

module.exports = {
  getLessen,
  addLes,
};
