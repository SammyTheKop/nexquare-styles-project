# Libera Superheroes
```
The project is specifically built for the second round of Libera interview 
```
## Project Link 
```
The Project currently runs on the local environment of the user. The frontend is configured to run on port: 3000 and the backend runs on port: 9000
```

## The Building Blocks of the Application
1. Frontend
2. Backend

### Frontend
The frontend of the Application is built using React and React Hooks.

### Backend
The frontend of the Application is built using Node.js.

### Project Structure
```
  .
  +-- frontend
  |   +-- style.css
  +-- backend
  |   +-- utils.js
```

## Installation
1. clone the repository
2. Steps to run the frontend of the Application. Go to root directory of the frontend Application and run the commands:
```
- npm install
- npm start
```
3. Steps to run the backend of the Application. Go to root directory of the backend Application and run the command:
```
- npm install
- npm start
```
Note: The frontend is configured to run on port: 3000 and the backend runs on port: 9000

## Features
- uses REST conventions and routes to:  
	- add a superhero
	- add a team
	- add a superhero to the team (superheros may be members of more than one team) 
  - remove a team
  - remove a superhero
  - remove a superhero from a team
  - retrieve a superhero by Id (including the teams they are part of)
  - retrieve a team by Id (including the superheros on the team)
  - based on the content of a group, report the mean alignment of the group
  - the backend of the application handles most of the errors and the front end displays the same

- uses React to Display the Functionalities elegantly
  - reusable react components such as Button, Textbox, Modal, Card, etc
  - most of the components are accessible and are developed based on the open source contents available online
  - the application allows the user to perform all the above mentioned functionalities
  - the user interface is responsive but was developed as a desktop first application
  - test cases for the user interface components

## Video Walkthrough
```
Please check the short loom video of the application and the functionalities: 
```

## Test Case Scenarios
- The APIs Returns an expected value
- Ths APIs Throws an exception under the tested condition
- The APIs Changes the state of the system in-memory data

Note: Currently the unit test cases of the APIs are not present but can be added.

