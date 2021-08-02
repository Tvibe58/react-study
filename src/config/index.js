
/**
 * 由于本项目依托在github上，不能自己配置nginx,于是不能支持真实的url,子路由刷新会出现404,
 * 问题：<reat-router 线上子路由刷新404>
 * 
 * 原因：项目采用history路由（）
 * history 路由：监听 url 中的路径变化，需要客户端和服务端共同的支持；比如https://tvibe58.github.io/react-study/home
 * hash 路由：监听 url 中 hash 的变化，然后渲染不同的内容，这种路由不向服务器发送请求，不需要服务端的支持；比如https://tvibe58.github.io/react-study/#/home
 * 
 * 解决方法一、后台服务器配置nginx（pass,本项目依托在github上，不能自己配置nginx）
 * 解决方法二、用hash路由
 * 
 * 本项目采用的是history路由，通过配置basename，可灵活使其成为history或hash模式
 */
export const config = {
  baseName: '/react-study/#'
  // baseName: '/react-study'
}
