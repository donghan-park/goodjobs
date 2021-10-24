
  
  /**
   * POST /login
   * Sign in using email and password.
   */
  exports.postLogin = (req, res, next) => {
    const validationErrors = [];
    if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' });
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors);
      return res.redirect('/login');
    }
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) {
        req.flash('errors', info);
        return res.status(400).send({error: "Password is incorrect"})
      }
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Success! You are logged in.' });
        res.redirect('/');
      });
    })(req, res, next);
  };
  
  /**
   * POST /signup
   * Create a new local account.
   */
  exports.postSignup = (req, res, next) => {
    const validationErrors = [];
    if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' });
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors);
      return res.redirect('/signup');
    }
  
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
  
    User.findOne({ username: req.body.username }, (err, existingUser) => {
      if (err) { return next(err); }
      if (existingUser) {
        req.flash('errors', { msg: 'Account with that username already exists.' });
        return res.redirect('/signup');
      }
      user.save((err) => {
        if (err) { return next(err); }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect('/');
        });
      });
    });
  };


