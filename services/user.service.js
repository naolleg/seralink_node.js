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

    },getRoleUsingUserId:
    async (data) => {
        try {
          const rows = await query(userQuery.getRoleUsingUserId, [data.userId]);
          return rows;
        } catch (error) {
          throw error;
          return null;
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
            const rows  = await query(userQuery.getUserByEmail,[data.email]);
            return rows;
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
        
    }, getProfile: async (data) => {
        try {
            const rows = await query(userQuery.getProfile, [data.userId]);
            return rows;
        } catch (error) {
            throw error;
            return null;
        }
    }


}

module.exports = UserService;