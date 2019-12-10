const http = require('http');
const router = require('./router.js');
const config = require('./config/config');


const {port, host, appName} = config;

const server = http.createServer(function (req, response) {
    // 注册路径和其对应回调函数
    router.register(req, response);
});


server.listen(port, host, function () {
    console.log(`${appName} 运行在http://${host}:${port}`);
});
