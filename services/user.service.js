const query = require('../config/db');
const userQuery = require("../querys/user.query")
const UserService = {
    getAllusers: async ()=>{
        try {
            const data  = await query(userQuery.getAllUserQuery);
            return data;
        } catch (error) {
           // console.log("erro services");
            throw error
        }

    },
    getSinglelusers: async (id)=>{

        try {
            const data  = await query(userQuery.getSingleUser,id);
            return data;
        } catch (error) {
           // console.log("erro services");
            throw error
        }
        
    },
    getUserByEmail: async (data)=>{

        try {
            const data  = await query(userQuery.getUserByEmailQuery,data.email);
            return data;
        } catch (error) {
           // console.log("erro services");
            throw error
        }
        
    },
    insertUserTable: async (data)=>{

        try {
            const result  = await query(userQuery.insertUserTableQuery,[data.email,data.password,data.role,data.image,data.firstname,data.lastname]);
            return result;
        } catch (error) {
           // console.log("erro services");
            throw error
        }
        
    },



    deleteSinglelusers: (id)=>{
        
    },
    updateSinglelusers: (data)=>{
        
    }


}

module.exports = UserService;