
const loginQuery = {
    getUserPasswordByUserId: 'SELECT password FROM users WHERE userId = ? ORDER BY createdDate DESC;',
    getUserByEmail: 'SELECT * FROM users WHERE email = ?;',
    getUserRoleAndFirstName: 'SELECT role, firstname FROM users WHERE userId = ?;'
  };
  module.exports=loginQuery
  