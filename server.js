const express = require('express')
const next = require('next')


const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});

const handle = app.getRequestHandler();

app.prepare()

.then(() => {
    const server = express();


    server.get( '/user/:name', (req,res) => {
        app.render(req,res,'/user',{name:req.params.name})
    })

    server.get( '/json/:name', (req,res) => {
        app.render(req,res,'/json',{name:req.params.name})
    })
    server.get( '*', (req,res) => {
            return handle(req,res);
 
    })

    server.listen(3000 , err=> {
        if(err) throw err;

        console.log('Ready on http://localhost:3000');

    })
})

.catch(ex => {

    console.error(exx.stack);
    process.exit(1);
})