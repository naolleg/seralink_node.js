const jobService  = require("../services/job.service")
const jobController = {
    createpost: async (req,res)=>{
try {
    const{
        title,
        category,
        salary,
        experience,
        qualification,
        quantity,
        addressId,
        orgProfileId,
        createdDate,
        deadline,
        hirerName }=req.body;
if(!title||!category||!salary||!experience||!qualification||!quantity||!addressId||!orgProfileId||!createdDate||!deadline||!hirerName){
    return res.status(400).json({
        success: false,
        message: "All fields are required"
    })
}
const isjobposted = await jobService.createpost(req.body)
console.log(isjobposted.insertId);
if(isjobposted){
  return res.status(200).json({
    success: true,
    message: "job posted successfully"
  })
}


} catch (error) {
    throw error
}

}
,
//getallpost for the jobs
getallposts: async(req,res)=>{
    const result=await jobService.getallpost(req.body);
    return res.status(200).json({
        success: true,
        data: result
    })
}










}
    module.exports = jobController

