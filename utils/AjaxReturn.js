// +----------------------------------------------------------------------
// | 正确响应码
// +----------------------------------------------------------------------
exports.SUCCESS_RESPONSE = SUCCESS_RESPONSE = {'code': 10000, 'message': '操作成功'};

// +----------------------------------------------------------------------
// | 一般错误响应码
// +----------------------------------------------------------------------
exports.ERROR_RESPONSE = ERROR_RESPONSE = {'code': 10001, 'message': '操作失败'};


// +----------------------------------------------------------------------
// | 路径错误
// +----------------------------------------------------------------------
exports.ERROR_RESPONSE_PATH = ERROR_RESPONSE_PATH = {'code': 10002, 'message': 'URL无效'};

// +----------------------------------------------------------------------
// | 系统级错误响应码
// +----------------------------------------------------------------------
exports.ERROR_RESPONSE_SYSTEM = ERROR_RESPONSE = {'code': 10003, 'message': '系统错误 请稍后再试'};

// +----------------------------------------------------------------------
// | 服务级错误响应码
// +----------------------------------------------------------------------
//    const ERROR_RESPONSE_LOGIN_FAILED = {'code' : 100010, 'message' : '登录失败'};
//    const ERROR_RESPONSE_LOGIN_FAILED = {'code' : 100020, 'message' : '登录失败'};


// | 账号问题 103xx
exports.ERROR_RESPONSE_LOGIN_FAILED = ERROR_RESPONSE_LOGIN_FAILED = {'code': 10300, 'message': '登录失败'};
exports.ERROR_RESPONSE_USER_AUTH_FAIL = ERROR_RESPONSE_USER_AUTH_FAIL = {'code': 10301, 'message': '用户名或者密码错误'};

// |权限问题 104xx
exports.ERROR_RESPONSE_PERMISSION_NO_VALIDATION = ERROR_RESPONSE_PERMISSION_NO_VALIDATION = {
    'code': 10400,
    'message': '请登录'
};
exports.ERROR_RESPONSE_PERMISSION_VALIDATION_FAIL = ERROR_RESPONSE_PERMISSION_VALIDATION_FAIL = {
    'code': 10400,
    'message': '权限验证失败'
};
exports.ERROR_RESPONSE_HTTP_METHOD_NOT_ALLOWED = ERROR_RESPONSE_HTTP_METHOD_NOT_ALLOWED = {
    'code': 10401,
    'message': '网络请求方式不被不予许'
};

exports.ERROR_RESPONSE_REQUEST_BAN = ERROR_RESPONSE_REQUEST_BAN = {
    'code': 10401,
    'message': '此请求是被禁止的'
};

// |数据问题 105xx
exports.ERROR_RESPONSE_DATA_CHANGE = ERROR_RESPONSE_DATA_CHANGE = {'code': 10500, 'message': '数据没有任何更改'};
exports.ERROR_RESPONSE_DATA_REPEAT = ERROR_RESPONSE_DATA_REPEAT = {'code': 10501, 'message': '数据重复'};
exports.ERROR_RESPONSE_DATA_NOT = ERROR_RESPONSE_DATA_NOT = {'code': 10502, 'message': '数据不存在'};
exports.ERROR_RESPONSE_DATA_VALIDATE_FAIL = ERROR_RESPONSE_DATA_VALIDATE_FAIL = {'code': 10503, 'message': '数据验证失败'};

// | 数据库问题 106xx
exports.ERROR_RESPONSE_DATABASE_ERROR = ERROR_RESPONSE_DATABASE_ERROR = {'code': 10600, 'message': '数据库操作失败'};

// | 上传问题 107xx
exports.ERROR_RESPONSE_UPLOAD_FAIL = ERROR_RESPONSE_UPLOAD_FAIL = {'code': 10700, 'message': '文件上传失败'};
exports.ERROR_RESPONSE_UPLOAD_TYPE_ERROR = ERROR_RESPONSE_UPLOAD_TYPE_ERROR = {'code': 10701, 'message': '上传文件类型错误'};

// |网络问题 108xx
exports.ERROR_RESPONSE_TIMEOUT = ERROR_RESPONSE_TIMEOUT = {'code': 10800, 'message': '超时'};


/**
 *
 * @param response
 * @param data 返回的数据
 * @param status 状态码与提示信息
 * @param addition  附加信息
 */
exports.json = function (response, data, status = SUCCESS_RESPONSE, addition = '') {
    let json = status;
    json['data'] = data;
    json['addition'] = addition;
    response.charsets = 'utf-8';
    response.writeHeader(200, {
        "Content-Type": "application/json,charset=utf-8"
    });
    response.write(JSON.stringify(json));
    response.end();
};
