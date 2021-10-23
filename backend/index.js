const express = require('express')
const app = express();

app.use((req, res, next) => {
    // After successful login, redirect back to the intended page
    if (!req.user
      && req.path !== '/login'
      && req.path !== '/signup'
      && !req.path.match(/^\/auth/)
      && !req.path.match(/\./)) {
      req.session.returnTo = req.originalUrl;
    } else if (req.user
      && (req.path === '/account' || req.path.match(/^\/api/))) {
      req.session.returnTo = req.originalUrl;
    }
    next();
  });

app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);


app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
  
module.exports = app;