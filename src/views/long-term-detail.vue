<template>
  <div class="container"  id='app'>
		<div class="title">长期任务进度</div>
		<div class="top-banner">
			<h1>{{ this.$route.params.title }}</h1>
			<!-- 动态改变的东西，比如下面的时间要单独用一个标签和id -->
			<p class="deadline">截止日期：<span id="time" >{{ deadlineText }}</span></p>
			<span :class="status ? 'finish' : 'notFinish'">{{ status ? '完成' : '未完成'}}</span>
			<ul class="buttons">
				<!-- 前面有小图标的一般用<li>标签 -->
				<li id="request"><img :src="require(`@/assets/request.png`)">任务要求</li> 
				<li id="file" @click="fileWindowShow"><img :src="require(`@/assets/file.png`)">任务文件</li>
			</ul>
		</div>

		<div class="remain">
			剩余：<span id="remain-day">{{ remainDays }}</span>天
		</div>

		<div class="title2">任务进度</div>
		<div class="mission-body">
			<div class="add" @click="addWindowShow">
				<img :src="require(`@/assets/add-icon.png`)" id="add-icon">
			</div>
			<li class="text" v-for="list in todos" :key="list.text">
				{{ list.text }}
				<span class="finish-time">{{ list.time }}</span>
			</li>
		</div>
		<div class="bottom-banner">不要拖到最后哟!</div>
		<TheAddWindow v-show="addShow" @close="addWindowClose" @submit="addTodos" />
		<TheMissionFile v-show="fileShow" @close="fileWindowClose" />
	</div>
</template>

<script>
import TheAddWindow from '@/components/TheAddWindow.vue';
import TheMissionFile from '@/components/TheMissionFile.vue'; 
import store from "@/store.js"


export default {
  name: 'long-term-detail',
  data() {
	let data = store.longTerm.find(
		list => list.title === this.$route.params.title
	);
	if(data != null){
		data.addShow = false;
		data.fileShow = false;
		data.inputText = '';
		return data;
	}
	else return {addShow: false, fileShow: false}
  },
  components: {
	  TheAddWindow,
	  TheMissionFile
  },
  computed: {
	  remainDays(){
		  var now = new Date();
		  var deadline = new Date(this.deadline.year,this.deadline.month-1,this.deadline.date,this.deadline.hour,this.deadline.minute); 
		  if(deadline < now) return 0;
		  else return parseInt( (deadline - now)/(3600*1000*24) );
	  },
	  deadlineText(){
		  return this.deadline.year + '年' + this.deadline.month + '月' + this.deadline.date + '日' + formatTime(this.deadline.hour) + ":" + formatTime(this.deadline.minute)
	  }
  },
  methods:{
	  addWindowShow(){
		  this.addShow = true;
	  },
	  addWindowClose(){
		  this.addShow = false;
	  },
	  fileWindowShow(){
		  this.fileShow = true;
	  },
	  fileWindowClose(){
		  this.fileShow = false;
	  },
	  //添加框中的内容到本地界面
	  addTodos(e){
		  console.log(e)
		  let todo = {
                text: e.inputText,
				time: e.deadline.year + '.' + e.deadline.month + '.' + e.deadline.date
			};
		  this.todos.push(todo);
	  }
  }
}

function formatTime(time) {
	if(time < 10)
		return ( '0' + time);
	else
		return time.toString();
}
</script>
<style scoped>

* {
	box-sizing: border-box;
}
/* 首先写好容器的宽高和背景*/
.container{
	width: 750px;
    height: 1334px;
	background-image: url("../assets/bg.png");
	background-attachment: local;
	background-size: 100% auto;
	/*居中*/
	margin: 0 auto;
	padding: 0.8em 1.2em;
	position: relative;
}
.title{
    font-size: 1.64rem;
	color: #ffffff;
	margin: 0.5em 0.7em;
}

.top-banner {
  	background-color: #ffffff;
	border-radius: 5px;
	padding: 0.8em 1.2em;
	/*方便子元素的绝对定位*/
	position: relative;
}
/*字体color和font-family可以从ps里直接复制*/
.top-banner h1 {
    font-size: 3.2rem;
    color: rgb(92, 92, 92);
    margin-bottom: 0;
}

.top-banner .deadline {
    color: rgb(154, 154, 154);
    font-size: 2rem;
    margin-top: 5px;
}
.top-banner .finish {
	background-color: #46c0b6;
	height: 1.5em;
	font-size: 2rem;
	color: #ffffff;
	border-radius: 1em;
	padding: 0 0.5em;
	/*定位*/
	position: absolute;
	top: 1.6em;
	right: 0.5em;
}
.top-banner .notFinish {
	background-color: #aebebc;
	height: 1.5em;
	font-size: 2rem;
	color: #ffffff;
	border-radius: 1em;
	padding: 0 0.5em;
	/*定位*/
	position: absolute;
	top: 1.6em;
	right: 0.5em;
}
.top-banner .buttons{
	display: block;
	position: relative;
	padding: 0;
	font-size: 2rem;
	color: rgb(92, 92, 92); 
	margin: 1rem 0 0.5rem 0;
}

.top-banner .buttons img {
	width: 2.2rem;
	height: 2.2rem;
	margin-right: 0.5em;
	position: relative;
	top: 0.2em;
}
.top-banner .buttons #request {
	display: inline-block;
	width: 49%;
	text-align: center;
	border-right: 3px solid #26b5a9;
	cursor: pointer;
}

.top-banner .buttons #file {
	display: inline-block;
	width: 49%;
	text-align: center;
	cursor: pointer;
}

.remain {
	background-color: #ffffff;
	border-radius: 0.15em;
	padding: 0.3em 0.6em;
	margin: 0.7em auto;
	color: rgb(104, 104, 104);
	font-size: 2.3rem;
}
.title2{
  	color: rgb(133, 133, 133);
    font-size: 1.64rem;
	margin: 0.3em 0.7em;
}
.mission-body{
	background-color: #ffffff;
	border-radius: 0.3em;
	padding: 1em 2em;
	margin: 0.5em auto;
	height: 50%;
}
.mission-body .add {
	display: block;
	border-bottom: 1px solid rgb(180,180,180);
}
.mission-body .add #add-icon {
	width: 3rem;
	height: 3rem;
	margin: 0.5rem auto;
	display: block;
	cursor: pointer;
}
.mission-body .text {
	list-style: none;
    color: rgb(104, 104, 104);
    font-size: 2.2rem;
    position: relative;
    margin: 0.2em 0;
	font-weight: 400;
}
.mission-body .text .finish-time {
    position: absolute;
    width: 6em;
    text-align: center;
    right: 0rem;
}
.bottom-banner {
	display: block;
	color: #26b5a9;
	font-size: 2.4rem;
	text-align: center;
}
</style>