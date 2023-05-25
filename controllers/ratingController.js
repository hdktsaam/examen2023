const db = require("../databank");

const getRating = (req, res) => {
  db.all("select * from rating", [], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ ratings: rows });
  });
};

const getRatingByCourse = (req, res) => {
  db.all(
    "select * from rating where lessen_id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.json({ message: err.message });
      res.json({ ratings: rows });
    }
  );
};

const addRating = (req, res) => {
  const newRating = {
    user_id: req.body.user_id,
    les_id: req.body.les_id,
    aantalSterren: req.body.aantal,
  };
  db.run(
    "insert into rating (user_id, lessen_id, AantalSterren) values (?,?,?)",
    [newRating.user_id, newRating.les_id, newRating.aantalSterren],
    (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: "Ok" });
    }
  );
};

module.exports = {
  getRating,
  getRatingByCourse,
  addRating,
};
