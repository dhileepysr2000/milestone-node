const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const e = require('cors');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.post('/',(request,response)=>{

    let {firstname,lastname,email,phonenumber,password} = request.body;

    let sql = 'insert into students(firstname,lastname,email,phonenumber,password) values (?,?,?,?,?)';

    c.query(sql,[firstname,lastname,email,phonenumber,password],(error,result)=>{
        if(error){
            let s = {"status":"error"}
            response.send(s);
        }
        else{
            let s = {"status":"Success"};
            response.send(s);
        }
    })

})

app.get('/details',(request,response)=>{

    let sql = 'select * from students';

    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })

})

app.listen(3002, ()=>{console.log('Server running on port no : 3002')});