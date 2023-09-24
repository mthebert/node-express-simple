# Simple Express API

Wanted to use the Express generator to make a simple CRUD API

## Install and setup

Requires Node to be installed, I am using v14

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
