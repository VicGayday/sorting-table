/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("points", {
    id: "id",
    date: "datetime",
    title: "varchar(255)",
    quantity: "integer",
    distance: "integer"
  })
};

exports.down = pgm => { };
