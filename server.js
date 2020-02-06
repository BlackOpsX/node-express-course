const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Destin'},
    {name: 'Djedjoh'},
    {name: 'Godwe'}
    ]
app.get('/users', function(req,res){
        res;JSON({
            success: true,
            message: 'successfully got users. Nice!',
            users: mockUserData
        })
    })
app.listen(8000, function(){
    console.log("server is running");
    
})