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
    async createUser(user){
        const newUser = await collection.insertOne(user);
        return newUser;
    }
    async deleteUser(id){
        const user = await collection.deleteOne({_id: id});
        return user;
    }
    async updateUser(id , user){
        const updatedUser = await collection.findOneAndUpdate({_id: id} , {$set: {name: user.name , password: user.password}}, { returnDocument: "after" });
        return updatedUser;
    }
}

module.exports = new UserService;