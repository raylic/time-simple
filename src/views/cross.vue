<template>
    <div class="container">
        <div class="top">
            <div class="title">
                跨软件添加计划
            </div>
        </div>
        <ul>
            <li class="open">
                <img :src="require(`@/assets/7.png`)">
                <span class="proper-words"> RSE PT </span><span class="event">考试</span> 截止时间为 <span class="time">7月15日23:00</span> 
                <div class="separate"></div>
                <div class="show-all">
                    原文：各位同学，<span class="proper-words"> RSE PT </span><span class="event">考试</span>已经恢复，已
                    清空 前面有问题的<span class="event">测试</span>，新测试截止时间为 <span class="time">7
                    月15日 23:00</span> 
                </div>
                <div class="from">腾讯QQ</div>
                <div class="detail">
                    事件: <span class="event">考试</span> <br>
                    时间: <span class="time">7月15日 23:00</span><br>
                    地点: <span class="place">无</span><br>
                    关键词：<span class="proper-words"> RSE PT </span>
                </div>
            </li>
            <li class="de">
                <div class=delete><img :src="require(`@/assets/5.png`)"></div>
                <img :src="require(`@/assets/8.png`)">
                形势与政策 <span class="event">作业</span> 
            </li>
        </ul>
        <ul>
            <li class="de">
                <div class=delete><img :src="require(`@/assets/5.png`)"></div>
                <img :src="require(`@/assets/8.png`)">
                <span class="event">买</span> <span class="proper-words"> 酱油 </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
html{
    font-size: 16px;
}
*{
    box-sizing: border-box;
}
.container{
    width: 750px;
    height: 1334px;
    background-image: url("../assets/1.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding: 0rem;
    position: relative;
}
.top{
    display: flex;
    height: 5.6%;
    background-color: #26b5a9;
    align-items: center;
    padding: 0rem 0rem 0rem 2.68rem;
}
.title{
    font-size: 1.64rem;
    color: #ffffff;
}
.title2{
    font-size:1.64rem;
    color:#606060;
    left: 2.68rem;
    position: relative;
    margin-top: 1.5rem;
    margin-right: 2rem;
}
.title2 img{
    margin-left: 10px;
    width: 25px;
    height: 25px;
}/*用来放添加按钮，只有编辑界面会出现*/
.edit_return{
    position: absolute;
    right: 6.9%;
} /*编辑界面进入或退出按钮*/
.de{
    background-color: #ffffff;
    border-radius: 7px;
    padding: 2rem 0.5rem;
    display: block;
    position: relative;
    font-size: 2.6rem;
    width: 95%;
    color: #636363;
    margin-top: 1.75rem;
    box-shadow: -0.1rem 0.2rem 2rem 0.01rem #26b5a9;
}
.de img{
    width: 25px;
    height: 31px;
    margin-left: 15px;
}/*下拉符号*/
.de .delete img{
    width: 30px;
    height: 32px;
    right: 0;
    margin-right: 1rem;
    margin-top: 1rem;
    position: absolute;
}/*删除键,显示原文后是不见了的*/
.open{
    background-color: #ffffff;
    border-radius: 7px;
    padding: 32px 8px 32px 8px;
    display: block;
    position: relative;
    font-size: 2.6rem;
    width: 95%;
    color: #636363;
    margin-top: 1.75rem;
    box-shadow: -0.1rem 0.2rem 2rem 0.01rem #26b5a9;
}
.open img{
    width: 31px;
    height: 25px;
    margin: 20px 15px;
    float: left;
}/*还是用的图片表示下拉之后的样式，如果你觉得不得行可以换别的*/
.finish img{
    position: absolute;
    margin-top: 10px;
    right: 10px;
    width: 45px;
    height: 45px;
}
.separate{
    background-color: #26b5a9;
    height: 0.10rem;
    width: 100%;
    margin:24px 0px 24px 0px;
}
.show-all{
    font-size: 1.8rem;
    margin-left: 15px;
}/*展示全文*/
.from{
    margin-top: 5px;
    float: right;
    font-size: 1.5rem;
    color: #a2a2a2;

}/*来源*/
.detail{
    font-size: 1.8rem;
    line-height:40px;
    margin: 40px 0px 0px 15px;
}/*关键词识别详情*/
.detail span{
    text-decoration: underline;
}/*下划线的部分可修改*/
.time{
    color: #f92a78;
}/*ddl时间*/
.event{
    color: #ebb135;
}/*事件名称*/
.proper-words{
    color: #8269f0;
}/*专有名词，这些颜色都可以换，只要辨识度就行*/
.place{
    color: #d07ef6;
}
</style>