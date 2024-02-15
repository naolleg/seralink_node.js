use jsp;

-- Users table
CREATE TABLE if NOT Exists users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    createdDate DATETIME
);

-- Profile table
CREATE TABLE if NOT Exists profile (
    profileId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    fname VARCHAR(255),
    mname VARCHAR(255),
    lname VARCHAR(255),
    sex VARCHAR(50),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

-- ProfessionalProfile table
CREATE TABLE if NOT Exists professionalProfile (
    professionalProfileId INT PRIMARY KEY AUTO_INCREMENT,
    birthDate DATETIME,
    userId INT,
    cv TEXT,
    qualification VARCHAR(255),
    portfolio VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

-- OrgProfile table
CREATE TABLE if NOT Exists orgProfile (
    orgProfileId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    name VARCHAR(255),
    tinNumber VARCHAR(255),
    type VARCHAR(255),
    sector VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

-- Address table
CREATE TABLE if NOT Exists address (
    addressId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    city VARCHAR(255),
    subcity VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

-- Jobs table
CREATE TABLE if NOT Exists jobs (
    jobId INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    category VARCHAR(255),
    salary DECIMAL(10, 2),
    experience INT,
    qualification VARCHAR(255),
    quantity INT,
    addressId INT,
    orgProfileId INT,
    createdDate DATETIME,
    deadline DATETIME,
    description TEXT,
    FOREIGN KEY (addressId) REFERENCES address(addressId),
    FOREIGN KEY (orgProfileId) REFERENCES orgProfile(orgProfileId)
);

-- Apply table
CREATE TABLE if NOT Exists apply (
    applyId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    jobId INT,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (jobId) REFERENCES jobs(jobId)
);

-- Feedbacks table
CREATE TABLE if NOT Exists feedbacks (
    feedbackId INT PRIMARY KEY AUTO_INCREMENT,
    fullName VARCHAR(255),
    email VARCHAR(255),
    message TEXT
);



