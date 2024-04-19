const service = require("../Services/users.service.js");
const {ObjectId} = require("mongodb");

class UserController{
    async getUsers(req , res){
        const users = await service.getUsers();
        res.status(200).json(users);
    }
    async getUser(req , res){
        const id = new ObjectId(req.params.id);
        const user = await service.getUser(id);
        res.status(200).json(user);
    }
}

module.exports = new UserController;