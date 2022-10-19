import App from './App.vue'

//脚手架创建
//提前安装nodejs（菜鸟教程）
//配置淘宝镜像（配置完下载快点）：npm config set registry https://registry.npm.taobao.org

//第一步：第一次执行全局安装：npm install -g @vue/cli
//如安装有问题，按enter继续，安装完成重启cmd输入vue

//第二步：切换到你要创建项目的目录 然后使用命令创建项目：vue create xxx

//第三步：启动项目

new Vue({
    el:'#root', 
    template:`
        <App></App>
    `,
    components:{App},
})