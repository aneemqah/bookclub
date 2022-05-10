# Bookclub app

A full stack app that allows book enthusiasts to connect with other bookworms.

## Feature extension
 
Implemented new backend route so that users can create bookclub, edit and delete a bookclub. Also, added Bootstrap to some of the page views.

### Approach

1. Set up initial meeting with the project owner to uderstand & document requirements
2. Add tasks on Trello board
3. Demo to project owner


### Database set up

1. Access the MySQL interface in your terminal by running mysql -u root -p
2. Create a new database and name it bookclubapp `create database bookclubapp;` 
3. Create a `.env` file at the root project and add MySQL authentication information for MySQL user
4. Run `npm run migrate` in the root project. This will create 2 tables called 'books' and 'bookclub' in your database.

### Run app locally

1. Run `npm install`
2. Run `npm start` in client folder
3. Run `npm start` in root directory to start server


### Screenshots

<img width="500" src="https://user-images.githubusercontent.com/95934430/167720294-6e4dddea-9e94-4c2a-8522-d1a82efd8d4b.png">



<hr> 

Acknowledgements

This is a student project that was created at CodeOp, a full stack development bootcamp in Barcelona.

