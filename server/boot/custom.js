module.exports = function(app){
  let User = app.models.User;
  User.create({username: 'admin', password: 'admin'}, function(err, userInstance) {
    console.log(userInstance);
  });
}