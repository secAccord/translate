const express = require('express')
const app = express()
const path = require("path");
const file = require('fs')

app.post('/add',(req,res)=>{

    const {en,fr,de,pl} = req.query;
    const words = JSON.parse(file.readFileSync(path.join(__dirname,'../db/words.json')))
    const result = words.filter(word => word['en'].toLowerCase().includes(en.toLowerCase()))
    if (result.length > 0) {
        throw new Error('Word already exists')
    } else {
        words.push({
            en:en,
            fr:fr,
            de:de,
            pl:pl
        })
        file.writeFileSync(path.join(__dirname,'../db/words.json'),JSON.stringify(words))
        res.json({success: 'Word added'})
    }

});
app.get('/data',(req,res)=> {
    const {sword,lang} = req.query;
    const words = JSON.parse(file.readFileSync(path.join(__dirname,'../db/words.json')))
    const result = words.filter(word => word[lang].toLowerCase().includes(sword.toLowerCase()))

    res.json(result)
    console.log(result)
});

module.exports = app;
