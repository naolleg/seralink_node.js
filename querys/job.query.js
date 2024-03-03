const jobquery={
    insertAddressQuery:'insert into address (region,city) values(?,?);',
    getAllpostsQuery:'select * from jobs',
    createpostQuery:'insert into jobs (title,category,salary,experience,qualification,quantity,addressId,orgProfileId,createdDate,deadline,hirerName) values(?,?,?,?,?,?,?,?,now(),?,?);',
   
}
module.exports=jobquery;
