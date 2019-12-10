const AjaxReturn = require('../../utils/AjaxReturn');
module.exports = function (request, response) {
     // AjaxReturn(response,{message:'The Api is ready'});
     AjaxReturn.json(response,{message:'The Api is ready'})
};
