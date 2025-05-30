* 一、Cookie
 * 1. 特点：
 *    - 容量小，约4KB
 *    - 每次HTTP请求都会携带，增加网络传输量
 *    - 可设置过期时间(Expires/Max-Age)
 *    - 可设置Domain、Path等访问限制
 *    - 可被服务端设置和修改
 * 2. 应用场景：
 *    - 身份验证（登录状态）
 *    - 记住用户偏好
 *    - 追踪用户行为
 * 3. 安全问题：
 *    - 可设置HttpOnly防止XSS攻击
 *    - 可设置Secure只在HTTPS下传输
 *    - 可设置SameSite防止CSRF攻击
 * 
 * 二、localStorage
 * 1. 特点：
 *    - 容量较大，约5MB
 *    - 永久存储，除非手动清除
 *    - 不随HTTP请求发送
 *    - 受同源策略限制
 *    - 仅客户端可操作
 * 2. 应用场景：
 *    - 持久化存储应用配置
 *    - 缓存静态资源
 *    - 存储不敏感的用户数据
 * 
 * 三、sessionStorage
 * 1. 特点：
 *    - 容量较大，约5MB
 *    - 会话级存储，关闭标签页后清除
 *    - 不随HTTP请求发送
 *    - 受同源策略限制
 *    - 仅在同一标签页内共享
 * 2. 应用场景：
 *    - 表单数据暂存
 *    - 一次性导航状态
 *    - 临时会话数据