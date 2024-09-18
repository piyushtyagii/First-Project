const express = require('express')

const mongodb = require('./db')
const app = express()
const port = 5000

mongodb();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json())
app.use('/api',require("./routes/CreateUser"))
app.use('/api',require("./routes/Updatepassword"))
app.use('/api',require("./routes/UpdateUser"))
app.use('/api',require("./routes/FetchUser"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})