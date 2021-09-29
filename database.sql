drop table points;

create TABLE points(
  id SERIAL PRIMARY KEY,
  date DATE,
  title VARCHAR(255),
  quantity INTEGER,
  distance INTEGER
);

