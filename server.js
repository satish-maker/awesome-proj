const http = require('http')
const server = http.createServer((req,res) => {
console.log('creating connection')
res.end("Hello Satish")
})
const PORT = process.env.PORT || 8080
server.listen(PORT,console.log('Listening'))
