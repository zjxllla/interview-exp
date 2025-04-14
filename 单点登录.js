1. 同域单点登录
        设置cookie的domain和path，domain设置为主域名，将path属性设置为根路径
        将 Session ID（或 Token）保存到父域中
        这样父域下的所有子域都可以访问到这个cookie

2. 跨域单点登录
        部署统一的身份认证中心，用户在该中心登录后获得cookie
        子域访问时检查有没有token，如果没有token就跳转认证中心，检查cookie
        cookie存在就生成token拼接url，跳转回原页面
        原页面check token即可

