<template>
    
    <div class="container">
        <div class="top">
            <div class="title">
                {{currentTime.date}}
            </div>
        </div>
        <div class="title2">
            <div class="edit_return">
                <img :src="require(`@/assets/4.png`)"><!--这一页html是没有编辑的功能的，点击这个键进入编辑界面-->
            </div>
            长期计划
        </div>
        <ul>
            <router-link class="de" v-for="list in longTermList" :key="list.title" :to="{name: 'long-term-detail', params:{title: list.title}}">
                {{list.title}}
            </router-link>
        </ul>
    </div>
    
</template>
<script>
import store from "@/store.js";

export default {
    data(){
        return{
            longTermList:[
                {
                    title: "Java大实验"
                },
                {
                    title: "形势与政策作业"
                },
                {
                    title: "综合课程设计"
                }
            ]
        } 
    },
    computed:{
	  currentTime(){
		  var d = new Date();
		  return{
			  clockTime: d.getHours() + ':' + d.getMinutes(),
			  date: d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate()
		  }
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
    text-decoration: none;
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
.home-button{
    background: url("../assets/home.png");
    bottom:40px;
    left: 30px;
    width: 100px;
    height: 100px;
    position: absolute;
}/*不一定用在这个里*/
</style>