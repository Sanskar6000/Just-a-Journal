## Project Title: 📛
Just a Journal

## Demo link: 🔗
This application is deployed on Heroku. Please check it out 😄[here](https://diary-mern-app.herokuapp.com/).

## About the Project:<span>  📚<span/>

'Just a Journal' application is built using React on the frontend and Node on the backend with all CRUD functions, user authentication, and authorization
using JWT token. To access the full functionality of the application, users must create an account and log in. A user can create a Diary entry with a
title, content, and date after logging in. A user can edit or delete any entry.

## Screenshots: 📷
![Just-a-Journal](/client/src/Components/Entries/img/preview.jpg)
  
## Technologies: ☕️ 🐍 ⚛️
<p>
<img src="https://img.shields.io/badge/Client-ReactJS-blue?logo=react">
<img src="https://img.shields.io/badge/Server-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/Server-Express-green?logo=express">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">
<img src="https://img.shields.io/badge/Auth-JWT-white?logo=JSON Web Tokens">
</p>

## Setup: 💻

### 1. Clone repo

```
$ git clone git@github.com:Sanskar6000/Just-a-Journal.git
$ cd Just-a-Journal
```
  
### 2. Create .env File

- create a .env file in server folder with following environmental variables

```
PORT=
MONGODB_URL=
TOKEN_SECRET=
```  
  
### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/justajournal
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection  

### 4. Run Backend

```
$ cd server
$ npm install
$ npm run dev
```

### 5. Run Frontend

```
# open new terminal
$ cd client
$ npm install
$ npm start
```  

### 6. Run locally
- Run this on browser: http://localhost:3000  

## Contact: 📬 

If you want to contact me, you can reach me through below handles.

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanskar-yerawar-056307205/)


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

