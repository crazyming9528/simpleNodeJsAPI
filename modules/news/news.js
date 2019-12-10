const AjaxReturn = require('../../utils/AjaxReturn');

module.exports = function (request, response) {
    AjaxReturn(response, {name: '新闻模块'});
};
