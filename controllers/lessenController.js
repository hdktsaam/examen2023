const db = require("../databank");

const getLessen = (req, res) => {
  db.all(
    "Select * from lessen where user_id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: rows });
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
