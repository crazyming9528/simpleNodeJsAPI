const superagent = require('superagent');
const cheerio = require('cheerio');
const AjaxReturn = require('../../utils/AjaxReturn');



    let getNews = (res) => {
        let newsArr = [];
        // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。

        /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
           以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
         */
        let $ = cheerio.load(res.text);

        // 找到目标数据所在的页面元素，获取数据
        $('div#pl_top_realtimehot table tbody tr a').each((idx, ele) => {
            // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
            // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
            let news = {
                title: $(ele).text(),        // 获取新闻标题
                href: "https://s.weibo.com"+$(ele).attr('href') // 获取新闻网页链接
            };
            newsArr.push(news)              // 存入最终结果数组
        });
        return newsArr
    };



module.exports = function (request, response) {


    superagent.get('https://s.weibo.com/top/summary?cate=realtimehot')
        .end((err, res) => {

            let data = [];
            if (err) {
                AjaxReturn.json(response, null, AjaxReturn.ERROR_RESPONSE, '新闻获取失败');
                console.log(err);
                // console.log('新闻抓取失败');

            } else {

                data = getNews(res);


                // console.log(news);
            }

            AjaxReturn.json(response, data);
        })


};
