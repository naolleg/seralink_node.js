const query = require("../config/db");
const loginQuery = require("../querys/login.query");

const loginService = {
  getUserByEmail: async (data) => {
    try {
      const rows = await query(loginQuery.getUserByEmail, [data.userEmail]);
      return rows;
    } catch (error) {
      throw error;
      return null;
    }
  },
  getUserPasswordByUserId: async (data) => {
    try {
      const rows = await query(loginQuery.getUserPasswordByUserId, [data.userId]);
      return rows;
    } catch (error) {
      throw error;
      return null;
    }
  },
};

module.exports = loginService;