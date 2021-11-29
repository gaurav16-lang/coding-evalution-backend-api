const { strictEqual } = require("assert");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const connect = ()=>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/Naukri")
}










// createing the schemas

// cityschema

const cityschema = new mongoose.Schema({
    namec:{type:String,required:true}},
    {
        versionKey:false,
        timestamps:true
    }
)

const City = mongoose.model("city",cityschema)

// skill 

const skillschema = new mongoose.Schema({
    skill_name:{type:String,required:true}},{
        versionKey:false,
        timestamps:true
    }
)
const Skill = mongoose.model("skill",skillschema)
// const jobtype 

const jobtypeSchema = new mongoose.Schema({
    jobtypewhat:{type:String,required:true}},{
        versionKey:false,
        timestamps:true
    }
)
const Jobtype = mongoose.model("jobtype",jobtypeSchema)
//  noticeperiod

const noticeperiodschema = new mongoose.Schema({
    noticep:{type:Number,required:true}},{
        versionKey:false,
        timestamps:true
    }
)
const Noticeperiod = mongoose.model("noticeperiod",noticeperiodschema)
// rating

const ratingschema = new mongoose.Schema({
    ratingt:{type:Number,required:true}},{
        versionKey:false,
        timestamps:true
})
const Rating = mongoose.model("rating",ratingschema)


// company schema
const companyschema = new mongoose.Schema({
   comp_name:{type:String,required:true},
   year_est:{type:Number,required:true},
   companytype:{type:String,required:true}},{
    versionKey:false,
    timestamps:true
   

})
const Company = mongoose.model("company",companyschema)

// job opening

const vaccancyschema = new mongoose.Schema({
    vacancyj:{type:Number,required:true}},{
        versionKey:false,
        timestamps:true
})

const Vaccancy = mongoose.model("vaccancy",vaccancyschema)
// jobs Schema



const jobschema = new mongoose.Schema({

    jobtitle:{type:String,required:true},
    city_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"city",
        required:"true"
    },
    skill_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"skill",
        required:"true"
    }],
    jobtype_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"jobtype",
        required:"true"
    },
    noticep_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"noticeperiod",
        required:"true"
    },
    rating_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rating",
        required:"true"
    },
    company_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company",
        required:"true"
    },
    vaccancy_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vaccancy",
        required:"true"
    }},{
        versionKey:false,
        timestamps:true

})

const Job = mongoose.model("job",jobschema)


// ..............................model and schema is ready...................................



// now crud operation start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// crud api for city


app.post("/city",async(req,res)=>{
    try{
        const cityt= await City.create(req.body);
        return res.status(201).send(cityt)
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/city",async(req,res)=>{
    try{
        const city= await City.find().lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/city/:id",async(req,res)=>{
    try{
        const city= await City.findById(req.params.id).lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});

// crud skill schema
app.post("/skill",async(req,res)=>{
    try{
        const skillt= await Skill.create(req.body);
        return res.status(201).send(skillt)
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/skill",async(req,res)=>{
    try{
        const skillt= await Skill.find().lean().exec();
        return res.status(201).send(skillt);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/skill/:id",async(req,res)=>{
    try{
        const skillt= await Skill.findById(req.params.id).lean().exec();
        return res.status(201).send(skillt);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});

// jobtype

app.post("/jobtype",async(req,res)=>{
    try{
        const jobt= await Jobtype.create(req.body);
        return res.status(201).send(jobt)
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/jobtype",async(req,res)=>{
    try{
        const city= await Jobtype.find().lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/jobtype/:id",async(req,res)=>{
    try{
        const city= await Jobtype.findById(req.params.id).lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});


// noticeperiod

app.post("/noticeperiod",async(req,res)=>{
    try{
        const jobt= await Noticeperiod.create(req.body);
        return res.status(201).send(jobt)
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/noticeperiod",async(req,res)=>{
    try{
        const city= await Noticeperiod.find().lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/noticeperiod/:id",async(req,res)=>{
    try{
        const city= await Noticeperiod.findById(req.params.id).lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});


// ratingschema


app.post("/rating",async(req,res)=>{
    try{
        const jobt= await Rating.create(req.body);
        return res.status(201).send(jobt)
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/rating",async(req,res)=>{
    try{
        const city= await Rating.find().lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/rating/:id",async(req,res)=>{
    try{
        const city= await Rating.findById(req.params.id).lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});

// company crud

app.post("/company",async(req,res)=>{
    try{
        const jobt= await Company.create(req.body);
        return res.status(201).send(jobt)
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/company",async(req,res)=>{
    try{
        const city= await Company.find().lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/company/:id",async(req,res)=>{
    try{
        const city= await Company.findById(req.params.id).lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});

// job opening


app.post("/vaccancy",async(req,res)=>{
    try{
        const jobt= await Vaccancy.create(req.body);
        return res.status(201).send(jobt)
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/vaccancy",async(req,res)=>{
    try{
        const city= await Vaccancy.find().lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});
app.get("/vaccancy/:id",async(req,res)=>{
    try{
        const city= await Vaccancy.findById(req.params.id).lean().exec();
        return res.status(201).send(city);
    }catch(e){
return res.status(501).json({message:e.message,status:"failed"})
    }
});

// job crud



app.post("/jobs", async(req,res)=>{
    try{


        const jobt =await Job.create(req.body);
        return res.status(201).send(jobt)

    }catch(e){
        return res.status(501).json({message:e.message,status:"failed"})
    }
})
app.get("/jobs", async(req,res)=>{
    try{


        const jobt =await Job.find().populate({path:"city_id"}).populate({path:"skill_id"}).populate({path:"jobtype_id"}).populate({path:"noticep_id"}).populate({path:"rating_id"}).populate({path:"company_id"}).populate({path:"vaccancy_id"}).lean().exec();
        return res.status(201).send(jobt)

    }catch(e){
        return res.status(501).json({message:e.message,status:"failed"})
    }
})

app.get("/jobs/:id", async(req,res)=>{
    try{


        const jobt =await Job.findById(req.params.id).populate({path:"city_id"}).populate({path:"skill_id"}).populate({path:"jobtype_id"}).populate({path:"noticep_id"}).populate({path:"rating_id"}).populate({path:"company_id"}).populate({path:"vaccancy_id"}).lean().exec();
        return res.status(201).send(jobt)

    }catch(e){
        return res.status(501).json({message:e.message,status:"failed"})
    }
})









app.listen(3000, async() =>{
    await connect();
    console.log("listening the port 5000");
})