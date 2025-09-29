DROP TABLE IF EXISTS Person;

DROP TABLE IF EXISTS Address;

CREATE TABLE
    Person (
        personId INT,
        lastName VARCHAR(50),
        firstName VARCHAR(50)
    );

CREATE TABLE
    Address (
        addressId INT,
        personId INT,
        city VARCHAR(50),
        state VARCHAR(50)
    );

INSERT INTO
    Person (personId, lastName, firstName)
VALUES
    (1, Wang, Allen),
    (2, Alice, Bob);

INSERT INTO
    Address (addressId, personId, city, state)
VALUES
    (1, 2, New York City, New York),
    (2, 3, Leetcode, California);