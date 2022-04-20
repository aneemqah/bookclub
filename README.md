# Bookclub

### Setup

1. Run `npm install` in project directory
2. Cd into client folder and run `npm install`


### Database

1. Access the MySQL interface in your terminal by running mysql -u root -p
2. Create a new database and name it bookclubapp `create database bookclubapp;` 
3. Create a `.env` file at the root project and add MySQL authentication information for MySQL user

DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=bookclubapp

4. Run `npm run migrate` in the root project. This will create 2 tables called 'books' and 'bookclub' in your database.


### Run app locally

1. Run `npm start` in project directory 
2. Cd into client folder and run `npm start` to start the client 


