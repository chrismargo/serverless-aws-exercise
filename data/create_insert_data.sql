CREATE TABLE companies(
	company_id SERIAL,
	company_name varchar(500),
	company_address varchar(500),
	year_founded int,
	created_at timestamp,
	modified_at timestamp,
	archived bool,
	PRIMARY KEY (company_id)
);

CREATE TABLE team(
	team_id SERIAL, 
	team_name varchar(500),
	team_leader varchar(500),
	company int,
	created_at timestamp,
	modified_at timestamp,
	archived bool,
	PRIMARY KEY (team_id),
	FOREIGN KEY (company) REFERENCES companies(company_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE employees(
	employee_id SERIAL,
	employee_name varchar(500),
	company_title varchar(500),
	year_hired int,
	birthdate date,
	salary int,
	image varchar(500),
	team int,
	created_at timestamp,
	modified_at timestamp,
	archived bool,
	PRIMARY KEY (employee_id),
	FOREIGN KEY (team) REFERENCES team(team_id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Insert 2 companies
INSERT INTO companies (company_name, company_address, year_founded, created_at, modified_at, archived)
VALUES ('Acme Corporation', '123 Main St, Anytown, USA', 1995, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Tech Innovators', '456 Market St, BigCity, USA', 2005, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false);

-- Insert 5 teams for each company
INSERT INTO team (team_name, team_leader, company, created_at, modified_at, archived)
VALUES ('Development1', 'John Doe', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Sales1', 'Jane Smith', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Marketing1', 'Alice Brown', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Support1', 'Bob Johnson', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('HR1', 'Charlie Williams', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Development2', 'David Davis', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Sales2', 'Eve Martinez', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Marketing2', 'Frank Miller', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Support2', 'Grace Taylor', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('HR2', 'Henry Anderson', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false);

-- Insert 20 employees, 2 for each team
INSERT INTO employees (employee_name, company_title, year_hired, birthdate, salary, image, team, created_at, modified_at, archived)
VALUES ('John Doe', 'Software Engineer', 2010, '1985-04-12', 80000, 'john_doe.jpg', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Jane Smith', 'Software Engineer', 2011, '1986-05-14', 82000, 'jane_smith.jpg', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Alice Brown', 'Account Executive', 2015, '1987-06-16', 70000, 'alice_brown.jpg', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Bob Johnson', 'Account Executive', 2016, '1988-07-18', 72000, 'bob_johnson.jpg', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Charlie Williams', 'Marketing Specialist', 2018, '1989-08-20', 60000, 'charlie_williams.jpg', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('David Davis', 'Marketing Specialist', 2019, '1990-09-22', 61000, 'david_davis.jpg', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Eve Martinez', 'Customer Support Representative', 2015, '1991-10-24', 52000, 'eve_martinez.jpg', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Frank Miller', 'Customer Support Representative', 2016, '1992-11-26', 53000, 'frank_miller.jpg', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
	   ('Grace Taylor', 'HR Specialist', 2020, '1993-12-28', 56000, 'grace_taylor.jpg', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
	   ('Victor Simmons', 'HR Specialist', 2022, '1994-02-05', 59000, 'victor_simmons.jpg', 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
	   ('Henry Anderson', 'HR Specialist', 2021, '1994-01-30', 57000, 'henry_anderson.jpg', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Ivy Lewis', 'Software Engineer', 2012, '1985-02-01', 84000, 'ivy_lewis.jpg', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Jack Walker', 'Software Engineer', 2013, '1986-03-03', 85000, 'jack_walker.jpg', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Karen Hall', 'Account Executive', 2017, '1987-04-05', 73000, 'karen_hall.jpg', 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Larry Young', 'Account Executive', 2018, '1988-05-07', 74000, 'larry_young.jpg', 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Mia King', 'Marketing Specialist', 2019, '1989-06-09', 62000, 'mia_king.jpg', 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Nathan Wright', 'Marketing Specialist', 2020, '1990-07-11', 63000, 'nathan_wright.jpg', 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Olivia Scott', 'Customer Support Representative', 2017, '1991-08-13', 54000, 'olivia_scott.jpg', 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Peter Adams', 'Customer Support Representative', 2018, '1992-09-15', 55000, 'peter_adams.jpg', 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false),
       ('Quincy Baker', 'HR Specialist', 2021, '1993-10-17', 58000, 'quincy_baker.jpg', 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false);


DROP TABLE companies;
DROP TABLE employees;
DROP TABLE team;