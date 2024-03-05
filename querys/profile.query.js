const profilequery={
    getUserProfile:"SELECT JSON_OBJECT('email', email,'firstname', firstname,'lastname', lastname,'role', role) AS json_dataFROM users WHERE userId =?;"

}
module.exports=profilequery