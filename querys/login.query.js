
const loginQuery = {
    getUserPasswordByUserId: 'SELECT * FROM password WHERE userId = ? ORDER BY createdDate DESC;',
    getUserByEmail: 'SELECT * FROM users WHERE email = ?;',
  };
  module.exports=loginQuery
  