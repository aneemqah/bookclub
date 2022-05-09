# Bookclub app

A full stack app that allows book enthusiasts to connect with other bookworms.

## Feature extension
 
This was my team mates project for which I created a feature extension for. Implemented new  backend route so that users can create bookclub, edit and delete a bookclub. Also, added Bootstrap to some of the page views.

## Approach

1. Set up initial meeting with the project owner to uderstand & document requirements
2. Add tasks on Trello board
3. Demo to project owner


### Database set up

1. Access the MySQL interface in your terminal by running mysql -u root -p
2. Create a new database and name it bookclubapp `create database bookclubapp;` 
3. Create a `.env` file at the root project and add MySQL authentication information for MySQL user
4. Run `npm run migrate` in the root project. This will create 2 tables called 'books' and 'bookclub' in your database.

### Run app locally

1. Run `npm install` in project directory
2. Run `npm start` in client folder
3. Run `npm start` in root directory to start server





