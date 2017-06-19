const routes = require('express').Router();
const controllers = require('./controllers.js');
const auth = require('./auth/tokenAuth.js');
const fbAuth = require('./auth/fbAuth.js');

// TIME LOG
routes.use(function timeLog (req, res, next) {
  console.log('Time: ', new Date())
  next()
});

// AUTHENTICATION
routes.post('/login', auth.login);
routes.post('/register', auth.register);
routes.get('/signedin', auth.checkAuth);
routes.post('/facebook', fbAuth);

// OTHER ROUTES
routes.route('/api/users/:user')
  .get(controllers.getUser)
  .post(controllers.addUser)
  .put(controllers.patchUser)
  .delete(controllers.deleteUser);

routes.route('/api/users')
  .get(controllers.getUser)
  .put(controllers.patchUser);

routes.route('/api/habits')
  .post(controllers.addHabit)
  .put(controllers.updateHabit)
  .delete(controllers.deleteHabit);

routes.route('/api/dates')
  .post(controllers.addDate)
  .put(controllers.updateDate)
  .delete(controllers.deleteDate);


routes.route('/api/friends')
  .post(controllers.addFriends)
  .delete(controllers.deleteFriend);

module.exports = routes;
