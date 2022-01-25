DROP DATABASE IF EXISTS scheduler;

CREATE DATABASE scheduler;

\c scheduler;


CREATE TABLE availability (
  id SERIAL PRIMARY KEY,
  username VARCHAR(200) UNIQUE NOT NULL,
  monday VARCHAR(200) DEFAULT NULL,
  tuesday VARCHAR(200) DEFAULT NULL,
  wednesday VARCHAR(200) DEFAULT NULL,
  thursday VARCHAR(200) DEFAULT NULL,
  friday VARCHAR(200) DEFAULT NULL,
  saturday VARCHAR(200) DEFAULT NULL,
  sunday VARCHAR(200) DEFAULT NULL,
  timezone VARCHAR(200) NOT NULL
);

CREATE TABLE activity (
  id SERIAL PRIMARY KEY,
  friend_name VARCHAR(200) NOT NULL,
  availability_id INT NOT NULL,
  activity VARCHAR(200) NOT NULL,
  day VARCHAR(200) DEFAULT NULL,
  time VARCHAR(200) DEFAULT NULL
);