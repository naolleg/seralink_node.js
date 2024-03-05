const query =require ("../config/db");
const profileQuery =require("../querys/profile.query");
const profileService = {
  getUserById: async (data) => {
    try {
      const rows = await query(profileQuery.getUserById, [data.userId]);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  updateProfile: async (data) => {
    try {
      const rows = await query(profileQuery.updateProfile, [
        data.userId,
        data.firstname,
        data.lastname,
        //data.gender,
      ]);
      return rows;
    } catch (error) {
      console.error("Error in updateProfile:", error);
      throw error;
    }
  },
  getUserProfile: async (data) => {
    try {
      const row = await query(profileQuery.getUserProfile, [data]);
      return row;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
module.exports= profileService;
