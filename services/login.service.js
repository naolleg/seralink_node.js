const query = require("../config/db");
const loginQuery = require("../querys/login.query");

const loginService = {
  getUserByEmail: async (data) => {
    try {
      const rows = await query(loginQuery.getUserByEmail, [data.email]);
      return rows;
    } catch (error) {
      throw error;
      return null;
    }
  },getUserRoleAndFirstName:
  async (data) => {
    try {
      const rows = await query(loginQuery.getUserRoleAndFirstName, [data.userId]);
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