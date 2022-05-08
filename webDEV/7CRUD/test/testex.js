const http = require('http');
const server =  http.createServer(function(req,res) {
    if(req.url === '/'){
        let obj  = {name:"bas",age: 22, from:'khonkean'};
        res.write('You are at homepage')
        res.write('\n');
        res.end();
    }
});
server.addListener('connection',function(socket){
    console.log('connected')
})
server.listen(3000);