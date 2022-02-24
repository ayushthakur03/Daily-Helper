const express= require('express');
const path= require('path');

const port=4000;

const db= require('./config/mongoose');

const Tasks= require('./models/task');

const app=express();

app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));



app.get('/', function(req,res)
{
    Tasks.find({},function(err,taskList)
    {
        if(err)
        {
            console.log("error in fetching");
            return;
        }
        res.render('main',{
           tasklist:taskList
          });
    });
});



app.post('/create',function(req,res)
{
    Tasks.create({
        task:req.body.task,
        date:req.body.datepicker,
        mode:req.body.category
    },function(err,newTask)
    {
        if(err)
        {
            console.log(err);
            return;
        }

        return res.redirect('back');
    });
});

app.get('/main',function(req,res)
{
    let head= req.query.text;
    Tasks.find({},function(err,taskList)
     {
         if(err)
         {
             console.log("error in fetching");
             return;
         }
         res.render('main',{
            tasklist:taskList
           });
     });
});

app.post('/del-contact',function(req,res){
    let temp= req.body.cValue;
     Tasks.findByIdAndDelete(temp,function(err)
     {
         if(err)
         {
             console.log("error in deletion");
             return;
         }

         res.redirect('back');
     })

});





app.listen(port, function(err)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('Express server for to-do-list is running at:', port);
    }
})