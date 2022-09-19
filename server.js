require('dotenv').config()
var express = require("express")
var app = express()
var cors = require('cors')
let emailJS;

let http = require('http').createServer(app);
let io = require('socket.io')(http);

let dbConnect = require("./dbConnect");
let mailRoutes = require("./routes/mailRoutes");

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/mail', mailRoutes)

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  setInterval(()=>{
    socket.emit('join', user_id);
  }, 5000);
})

var port = process.env.port || 3000;

http.listen(port,()=>{
  console.log("App listening to "+ port)
})


