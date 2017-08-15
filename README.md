一个用node+express+mysql实现的用户登录、注册的小demo

克隆到本地实现的方法

1、将dbConnect.js文件的

function connectServer() {

    var client = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2320720405',
        database: 'SwithunHan'
    })
    return client;
}

方法的属性改为自己电脑上mysql的对应属性
2、在刚才的数据库中新建表table_1，table_1表中有username和password两列
3、安装依赖包：在项目的根目录打开命令行输入npm i,安装好之后输入npm start
4、在浏览器中输入127.0.0.1:3000就可以看见了

tip:在发布项目时不能总是手动重启服务器吧！所以用pm2这个包运行项目
1、安装pm2 - - - - - - npm install -g pm2
2、使用pm2运行项目 pm2 start [your app name] --watch(这样就可以在后台运行并重启服务器)