const url = require('url');
const path = require('path');
const fs = require('fs');
const AjaxReturn = require('./utils/AjaxReturn');
const news = require('./modules/news/news')
const home = require('./modules/sys/default')
const bd_news = require('./modules/news/baidu')

//
// exports.routes = [
//     {
//         'url': '/hello',
//         'handler': News,
//     }
// ]


// function writeErrorPage(code,response, errorType) {
//
//
//     response.writeHeader(code, {
//         "Content-Type" : "text/html"
//     });
//
//     response.end(`
//     <html>
//       <head>
//         <title>${errorType}</title>
//       </head>
//       <body>
//         <h1>${code} - ${errorType}</h1>
//       </body>
//     </html>
//   `);
// }


exports.register = function (request, response,) {


    const routes = [
        {
            'url': '/',
            'handler': home,
        },
        {
            'url': '/news',
            'handler': news,
        },
        {
            'url': '/bd_news',
            'handler': bd_news,
        }
    ];


    var pathName = url.parse(request.url).pathname;

    // 执行相应请求路径的回调函数
    for (let i = 0, len = routes.length; i < len; i++) {
        if (routes[i].url === pathName) {
            routes[i].handler(request, response);
            return;
        }
    }


    // 请求路径为文件返回文件内容
    var file = path.resolve(__dirname, '.' + pathName);
    fs.exists(file, function (exists) {
        // 请求路径不存在返回404页面
        if (!exists) {
            AjaxReturn.json(response, [], AjaxReturn.ERROR_RESPONSE_PATH, '')
            // writeErrorPage(404, response, 'NOT_FOUND');
        } else {
            var stat = fs.statSync(file);
            // 请求路径为目录返回403页面
            if (stat.isDirectory()) {
                AjaxReturn.json(response, null, AjaxReturn.ERROR_RESPONSE_REQUEST_BAN)
                // writeErrorPage(403, response, 'FORBIDDEN');
            } else {

                //这里暂时还没想好怎么处理
                AjaxReturn.json(response, null, AjaxReturn.ERROR_RESPONSE);
                // response.writeHeader(200, {
                //     "Content-Type": "text/html"
                // });
                // response.end(
                //     fs.readFileSync(file, 'utf-8')
                // );
            }
        }
    });


}
