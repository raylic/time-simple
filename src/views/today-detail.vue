<template>
    
    <div class="container">
        <div class="top">
            <div class="title">
                2020.7.10
            </div>
        </div>
        <div class="title2">
            <div class="edit_return">
                <img :src="require(`@/assets/4.png`)"><!--这一页html是没有编辑的功能的，点击这个键进入编辑界面-->
            </div>
            计划
        </div>

        <ul>
            <li v-for="(list, index) in planList" :key="list.body" style="list-style: none;">
                <div class="de" v-if="!list.opens">
                    <div class="finish" @click="finishStatus(index)">
                        <img :src="require(`@/assets/3.png`)" v-if="list.finish">
                        <img :src="require(`@/assets/3.2.png`)" v-else>
                    </div>
                    <img :src="require(`@/assets/8.png`)" @click="openStatus(index)" class="open-icon"> 
                    <span class="proper-words">{{list.body}}</span> 
                </div>
                <div class="open" v-else>
                    <img :src="require(`@/assets/7.png`)" @click="openStatus(index)">
                    <span class="proper-words"> {{list.body}}</span> 
                    <div class="separate"></div>
                    <ul class="details">
                       <li> 事件: <span class="event">{{list.event != null ? list.event : '无'}}</span> </li>
                       <li> 时间: <span class="time">{{list.time != null ? list.time : '无'}}</span> </li>
                       <li> 地点: <span class="place">{{list.addr != null ? list.addr : '无'}}</span> </li>
                       <li> 关键词：<span class="key-words">{{list.keyword != null ? list.keyword : '无'}}</span> </li>
                    </ul>
                </div>
            </li>
        </ul>

        <div class="title2">备忘事件</div>
        <ul>
            <li class="de">
                <div class="finish"><img :src="require(`@/assets/3.2.png`)"></div>
                <span class="event">买</span> <span class="proper-words"> 酱油 </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            planList: [
                {
                    body: 'RSE PT 考试 截止时间为 7月15日23:00',
                    event: '考试',
                    time: '7月15日23:00',
                    addr: null,
                    keyword: 'RES PT',
                    opens: false,
                    finish: false
                },
                {
                    body: '计算机网络期末考试 截止时间为 8月20日',
                    event: '考试',
                    time: '7月15日23:00',
                    addr: null,
                    keyword: 'RES PT',
                    opens: false,
                    finish: false
                }
            ],
        }
    },
    methods:{
        openStatus(index){
            console.log(this.planList[index].opens);
             this.planList[index].opens = !this.planList[index].opens;
        },
        finishStatus(index){
            console.log(this.planList[index].finish);
             this.planList[index].finish = !this.planList[index].finish;
        }
    }
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
    position: sticky;
    z-index: 1;
    top: 0;
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
    height: 2.5em;
    color: #636363;
    margin-top: 1.75rem;
    box-shadow: -0.1rem 0.2rem 2rem 0.01rem #26b5a9;
}
.de .proper-words {
    display: inline-block;
    width: 13em;
    height: 1.2em;
    position: absolute;
    top: 0.7em;
    left: calc(1em + 25px);
    overflow: hidden;
}
.de .open-icon{
    display: inline-block;
    width: 25px;
    height: 31px;
    margin-left: 15px;
    position: absolute;
    top: 1em;
    left: 0.5em;
}
.de .delete img{
    width: 30px;
    height: 32px;
    right: 0.5em;
    top: 0.7em;
    position: absolute;
}
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
.open .details > li {
    list-style: none;
    font-size: 1.8rem;
}

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
    color: #555555;
}/*专有名词，这些颜色都可以换，只要辨识度就行*/
.key-words{
    color: #a111aa;
}
.place{
    color: #d07ef6;
}
.separate{
    background-color: #26b5a9;
    height: 0.10rem;
    width: 100%;
    margin:24px 0px 24px 0px;
}
</style>