create database ANCHOR;
use ANCHOR;
create table  Patients (
     id INT PRIMARY KEY AUTO_INCREMENT,
     first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    password_hash VARCHAR(15),
    phone VARCHAR(13),
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other'),
    address TEXT
    );
    create table Doctors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    specialization VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    schedule1 TEXT
    );
    create table Appointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE,
    appointment_time TIME,
    status1 ENUM('scheduled', 'completed', 'canceled'),
    FOREIGN KEY (patient_id) REFERENCES Patients(id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(id)
    );
    create table Admin1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    password_hash VARCHAR(50),
    role1 VARCHAR(20)
    );
INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address)
VALUES ('Joe', 'Bideny', 'bideny@gmail.com', 'bdhruff@hfj', '+234786251724', '18-04-1970', 'Male', '41727-00100 Kidogo');

INSERT INTO Doctors (first_name, last_name, specialization, email, phone, schedule1)
VALUES ('Kamla', 'Smith', 'Clinical Psychology', 'smithk@gmail.com', '+234765432145', 'Mon-Fri 9:00-17:00');

INSERT INTO Appointments (patient_id, doctor_id, appointment_date, appointment_time, status1)
VALUES (267, 54, '13-11-2024', '10:00:00', 'scheduled');

INSERT INTO Admin (username, password_hash, role1)
VALUES ('admin_1', 'me2@2024', 'admin');
