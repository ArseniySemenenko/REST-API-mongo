const db = require("../db");
const collection = db.collection("users");

class UserService{
    async getUsers(){
        const users = await collection.find().toArray();
        return users;
    }
    async getUser(id){
        const user = await collection.findOne({_id: id});
        return user;
    }
}

module.exports = new UserService;