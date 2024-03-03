const userQuery ={
    getAllUserQuery: 'select * from users',
    getSingleUser: 'select * from users where userId=?',
    getUserByEmailQuery: 'select * from users where email=?',
    insertUserTableQuery: 'INSERT INTO users (email, password, role, image, firstname, lastname, createdDate) VALUES (?, ?, ?, ?, ?, ?, NOW())'
}

module.exports = userQuery;