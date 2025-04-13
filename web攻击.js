1. xss攻击(跨站脚本攻击)：
		1.1 反射型：从url中注入恶意脚本，并立即执行
		1.2 存储型：恶意脚本被存储在服务器上，用户访问时触发
		1.3 DOM型：通过修改DOM环境，注入恶意脚本

2. csrf攻击(跨站请求伪造)：
		2.1 基本csrf：诱导用户点击恶意链接，执行恶意操作
        2.2 post型：通过自动提交表单伪造请求
        2.3 json csrf：通过jsonp回调函数漏洞

3. sql注入：
        3.1 基于错误的注入 - 通过错误信息获取数据库结构
        3.2 联合查询注入 - 使用UNION获取其他表数据
        3.3 盲注 - 通过布尔或时间延迟判断注入结果
        3.4 堆叠查询 - 执行多条SQL语句  


4. 防御措施：
        4.1 XSS防御：
            - 输入过滤：对<>"'&等特殊字符进行转义
            - 输出编码：使用textContent代替innerHTML  // 将内容转义为纯文本
            - 设置CSP(Content Security Policy)头
            - 使用HttpOnly Cookie防止脚本窃取
    
        4.2 CSRF防御：
            - 添加CSRF Token：表单提交时验证随机Token
            - 检查Referer头：验证请求来源
            - 关键操作使用POST而非GET
            - 设置SameSite Cookie属性
    
        4.3 SQL注入防御：
            - 使用参数化查询(Prepared Statements)
            - 使用ORM框架避免直接SQL拼接
            - 最小权限原则：数据库账号只给必要权限
            - 输入验证：限制特殊字符如'";--
            - 错误信息模糊化