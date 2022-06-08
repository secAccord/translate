const app  = require('./engine/index')
const port = process.env.PORT || 3000;
const host = '0.0.0.0';
app.listen(port, host, ()=>{
    console.log(`Run in ${host}:${port}`);
});
