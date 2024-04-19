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
    async createUser(req , res){
        const user = req.body;
        const newUser = await service.createUser(user);
        res.status(201).json(newUser);
    }
    async deleteUser(req, res){
        const id = new ObjectId(req.params.id);
        const user = await service.deleteUser(id);
        res.status(200);
    }
}

module.exports = new UserController;