1. 跨域：指js发出的http请求的目标域名、协议、端口号与当前页面的域名、协议、端口号不一致
2. 同源策略：出于安全考虑，浏览器会阻止跨域请求，即同源策略

解决跨域：
1. JSONP 利用script标签不受同源策略限制的特点，动态插入script标签来请求跨域资源，服务器返回一段js代码，调用预先定义的回调函数。  
    缺点：不安全，只支持get请求，没有状态码。
2. 后端配置CORS响应头：响应头添加
    res.header('Access-Control-Allow-Origin', 'https://example.com');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    指示浏览器允许跨域
3. 代理服务器 设置代理服务器，服务器和服务器间不存在同源策略，本地发送请求，代理服务器响应并把请求转发给目标服务器，目标服务器响应后将数据返回给代理服务器再给本地。
4. nginx配置反向代理，将请求转发到目标服务器
server {
    listen 80;
    server_name example.com;

    # 前端静态资源
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # 后端API代理
    location /api/ {
        proxy_pass http://backend-server:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # CORS配置
        add_header 'Access-Control-Allow-Origin' '$http_origin' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' always;
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;

        # 处理OPTIONS请求
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '$http_origin';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;
            return 204;
        }
    }
}