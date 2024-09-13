// const express = require('express');

import express from 'express';
const app = express()
const port = process.env.dot || 3000;

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// })

app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is First joke'
        },
        {
            id:2,
            title:'Second joke',
            content:'This is Second joke'
        },
        {
            id:3,
            title:'Third joke',
            content:'This is Third joke'
        },
        {
            id:4,
            title:'Fourth joke',
            content:'This is Fourth joke'
        },
        {
            id:5,
            title:'Fifth joke',
            content:'This is Fifth joke'
        }
    ];
    res.send(jokes);
})

app.listen(port, ()=>{
    console.log(`App listening on ${port}`);
})