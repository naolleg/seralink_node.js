const query = require('../config/db');
const jobQuery = require("../querys/job.query")
const jobservice = {
    getallpost: async ()=>{
        try {
            const row = await query(jobQuery.getAllpostsQuery);
            return row;
        } catch (error) {
            throw error
        }

    },
    createpost: async (data)=>{

        try {
            const result  = await query(jobQuery.createpostQuery,[data.title,data.category,data.salary,data.experience,data.qualification,data.quantity,data.addressId,data.orgProfileId,data.createdDate,data.deadline,data.hirerName]);
            return result;
        } catch (error) {
           // console.log("erro services");
            throw error
        }
        
    },}

    module.exports=jobservice