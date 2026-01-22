CREATE DATABASE SaiketDB;

Use SaiketDB;

CREATE TABLE ContactMessages (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100),
    Email NVARCHAR(100),
    Message NVARCHAR(500),
    CreatedAt DATETIME DEFAULT GETDATE()
);

Select *from ContactMessages;
