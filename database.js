const mysql=require('mysql2');
const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'node_crud'

})

db.connect((err)=>{
    if(err){
        console.log('Error connecting to db:',err.stack);
        return;
    }
    console.log('Successfully connected to db')
})

module.exports=db