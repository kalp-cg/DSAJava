# Hotelss Database — README

This repository contains example SQL statements to create and manage a simple Hotels database.

## Database setup
Use a MySQL-compatible client to run the following:

```sql
SHOW DATABASES;

CREATE DATABASE Hotelss;
USE Hotelss;
```

## Schema
Create a `Hotels` table:

```sql
CREATE TABLE Hotels (
    hotel_id INT PRIMARY KEY,
    hotel_name VARCHAR(50) UNIQUE,
    city VARCHAR(50),
    available_rooms INT
);
```

## Sample data
Insert example rows:

```sql
INSERT INTO Hotels (hotel_id, hotel_name, city, available_rooms) VALUES
(1, 'carvan', 'Ahmedabad', 10),
(2, 'pruthvi', 'Ahmedabad', 5);
```

## Examples of operations
Update available rooms:

```sql
UPDATE Hotels
SET available_rooms = 20
WHERE hotel_id = 1;
```

Delete a row:

```sql
DELETE FROM Hotels
WHERE hotel_id = 1;
```

Aggregate queries:

```sql
SELECT SUM(available_rooms) AS total
FROM Hotels;

SELECT AVG(available_rooms) AS average
FROM Hotels;
```

## Notes
- Use single quotes for string literals in SQL.
- Adjust names and types to fit your environment as needed.
- Run these statements in the `Hotelss` database context.