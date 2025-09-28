-- Write your PostgreSQL query statement 
-- Employee table:
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | salary      | int  |
-- +-------------+------+
SELECT
    (
        SELECT DISTINCT
            salary
        FROM
            Employee
        order BY
            salary DESC
        OFFSET
            1
        limit
            1
    ) AS SecondHighestSalary