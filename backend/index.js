const express = require('express')
const app = express();
const chalk = require('chalk')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('express-flash')

const passportConfig = require('./config/passport');
const userController = require('./controllers/user.js')

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});


app.set('port', 8000)
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.post('/login', userController.postLogin);
app.post('/signup', userController.postSignup);


app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
  
module.exports = app;