# Simple Express API

Wanted to use the Express generator to make a simple CRUD API

## Install and setup

Requires Node to be installed, I am using v14

database added to project using lowdb

template engine pug used, formerly jade

added nodemon so it updates webserver any time files change

`$ npm install nodemon -g`

[Postman](https://www.postman.com/) is helpful for testing any REST operations

Clone repo:

`$ git clone https://github.com/mthebert/node-express-simple.git`

`$ cd node-express-simple`

Install Express application generator `$ npx express-generator` OR
`$ npm install -g express-generator`

Create an Express app named sampleApp, in folder named sampleApp, view engine
set to Pug

` $ express --view=pug sampleApp`

`$ cd sampleApp`

` $ npm install`

`$ DEBUG=sampleApp:* npm start`

open browser to [here](http://localhost:3000)

### Features

- Simple CRUD operations are in routes/users.js

  GET http://localhost:3000/users

  POST http://localhost:3000/users

  PUT http://localhost:3000/users/user/1

  DEL http://localhost:3000/users/user/1

- serve static files out of /public When you load [the main index](http://localhost:3000) there are files loaded from

  public/index.html

  public/images/panda.png

  public/stylesheets/styles.css

  public/javascripts/hello.js
