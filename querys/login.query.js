
const loginQuery = {
    getUserPasswordByUserId: 'SELECT * FROM password WHERE userId = ? ORDER BY createdDate DESC;',
    getUserByEmail: 'SELECT * FROM users WHERE email = ?;',
    getUserRoleAndFirstName: 'SELECT role, firstname FROM users WHERE userId = ?;'
  };
  module.exports=loginQuery
  