
class UserController() {
  constructor(userModel) {
    this.userModel = userModel;
  }

  getUser(req, res) {
    const user = this.userModel.find(req.params.id);

    req.send(user);
  }
}


module.exports = UserController;
