# iZettle - Product library

![Alt text](/screenshot.png?raw=true "Optional Title")

## Demo
If you just want to look at the result you can go here: [iZettle - Home assignment demo.](http://izettle.bubba.cc)

## How to use
First you need `Node >= 5.0` or if you use [nvm](https://www.npmjs.com/package/nvm) just run `nvm use` in project root and you also need [MongoDB](https://www.mongodb.com/) installed.

Then create a `.env` file by copy the `.env-template` and change settings for your liking.

**Then run these commands:**
- `npm install` - Will install the dependencies.
- `npm run dev` - Will start the dev-server and API.


## Frontend
The frontend is just a client app using React and Redux. On top of that Im using Redux thunk for async operations. Then to be able to use the latest ES6 features Im transpiling with Bable using Webpack.


## Backend (API)
I choosed to make an API using Node and [Hapi](http://hapijs.com/), Hapi is new to me but I have only heard good things about the framework and when working together with Boom and Joi for validating It works great.
[API-documentation can be found here.](http://izettle.bubba.cc:10000/documentation)


##### Database
For this assignment I did choose Mongodb because of It's simplicity to just start implement models. For a production environment I would choose PostgreSQL or another relational database but PostgreSQL has a nice feature called [Money](https://www.postgresql.org/docs/9.1/static/datatype-money.html) witch will come in handy for currencies.
