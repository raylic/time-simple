<template>
  <div class="container">
		<div class="top-banner">
			<div class="info">
				<div class="imgbox"><img :src="require(`@/assets/dolphin.png`)" /></div>
				<h2 class="name">{{name}}</h2>
				<p>{{slog}}</p>
				<router-link :to="{name: 'Setting'}" class="setting"><img :src="require(`@/assets/setting.png`)"/></router-link>
			</div>
			<div class="current-time">
				<span class="time">{{currentTime.clockTime}}</span>
				<span class="date">{{currentTime.date}}</span>
			</div>
		</div>	
		<div class="current-mission">
			<h2>当前任务:{{missions[0].body}}</h2>
			<p v-if="missions.length > 1">下一项:{{missions[1].body}}</p>
			<p v-else>当前是最后一项</p>
			<div class="more">
				<router-link :to="{name: 'Today-detail'}" class="text">查看更多</router-link>
				<div class="imgbox">
					<img :src="require(`@/assets/more.png`)"/>
				</div>
			</div>
		</div>
		<div class="today">
			<h2>今日备忘事件</h2>
			<router-link :to="{name: 'Today-detail'}" class="all">查看全部</router-link>
			<div class="mission-list">
				<div v-for="list in forgets" :key="list.body">{{list.body}}</div>
			</div>
		</div>
		<div class="recent">
			<h2>最近长期计划ddl</h2>
			<div class="more">
				<router-link :to="{name: 'Long-term'}" class="text">查看更多</router-link>
				<div class="imgbox">
					<img :src="require(`@/assets/more.png`)"/>
				</div>
			</div>
			<div class="ddl-list">
				<div v-for="(list,index) in recents" :key="list.body">
					<span :class="index==0 ? 'red': ''">{{list.ddl}}</span>
					：{{list.body}}</div>
			</div>
		</div>
		<div class="unchecked">
			<h2>跨软件添加</h2>
			<div class="more">
				<router-link :to="{name: 'Cross'}" class="text">查看更多</router-link>
				<div class="imgbox">
					<img :src="require(`@/assets/more.png`)"/>
				</div>
			</div>
			<p>{{unchecked[0].body}}</p>
		</div>
	</div>
</template>

<script>
// import store from "@/store.js";

export default {
  data(){
	  return{
		  name: 'EACO',
		  slog: '完成计划，冲呀',
		  missions:[
			  {
				  body:'完成比赛'
			  },
			  {
				  body:'做2018考研英语阅读'
			  },
		  ],
		  forgets:[
			  {
				  body:'买返校车票'
			  },
			  {
				  body:'带狗去体检'
			  }
		  ],
		  recents:[
			  {
				  body:'UI比赛作品提交',
				  ddl:'7.23'
			  },
			  {
				  body:'计算机网络期末复习',
				  ddl:'8.20'
			  }
		  ],
		  unchecked:[
			  {
				  body:'各位同学，RSE PT 考试已经恢复，已经清空前面有问题的测试，新测试截止时间为7月15日23:00\
				  （仅RSE PT, RSE Chapter还是7月10日23:00）',
			  }
		  ],
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
}
.container{
    width: 750px;
    height: 1334px;
    background-color: #f1f1f1;
    background-size: 100% 100%;
    margin: 0 auto;
}
.top-banner{
	width: 100%;
	background: #ffffff;
	height: 20%;
	position: relative;
}
.top-banner .info{
 	overflow: auto;
}
.top-banner .info .imgbox{
	float: left;
	padding: 2em 2.5em;
	padding-bottom: 2em;
}
.top-banner .info .setting {
	position: absolute;
	top: 4em;
	right: 3em;
}
.top-banner .info h2 {
	margin: 1em 0 0 0;
	font-size: 3rem;
	color: rgb(64, 64, 64);
}
.top-banner .info p {
	font-family: "SimHei";
	color: rgb(89, 89, 89);
	font-size: 2rem;
	margin: 0;
	padding: 0;
}
.top-banner .current-time {
	padding-left: 2.5em;
	margin: none;
}
.top-banner .current-time .time{
	font-size: 3rem;
	color: rgb(38, 181, 169);
	padding: none;
	display: inline-block;
	margin-right: 0.5em;
}
.top-banner .current-time .date{
	font-size: 2.5rem;	
	height: 2.5rem;
	line-height: 2.5rem;
 	color: rgb(103, 103, 103);
	padding: none;
	display: inline-block;
	border-left: 4px solid #292929;
	padding-left: 0.5em;
}
.current-mission{
	margin-top: 3em;
	background-color: #ffffff;
	border-top: 4px solid #d5e7e6;
	position: relative;
	padding-bottom: 1em;
}
.current-mission h2{
	font-size: 2.5rem;
	height: 3rem;
	line-height: 3rem;
    color: rgb(42, 42, 42);
    font-weight: 400;
    border-left: 0.3em solid #26b5a9;
    padding-left: 5px;
    margin-left: 1em;
    margin-bottom: 0.5em;
}
.current-mission p {
	font-size: 2rem;
    color: rgb(150, 150, 150);
    margin: 0 0 0 1.5em;
}
.current-mission .more {
	position: absolute;
	right: 1em;
	bottom: 0.5em;
	width: 12rem;
}
.more .text {
	font-size: 2rem;
	color: rgb(150, 150, 150);
	display: inline-block;
	text-decoration: none;
}
.more .imgbox{
	width: 2.2rem;
	height: 2.2rem;
	display: inline-block;
	position: relative;
	top: 7px;
}
.today{
	margin-top: 2rem;
	position: relative;
}
.today h2 {
	font-size: 2.5rem;
	height: 3rem;
	line-height: 3rem;
    color: rgb(42, 42, 42);
    font-weight: 400;
    border-left: 0.3em solid #26b5a9;
    padding-left: 5px;
    margin-left: 1em;
    margin-bottom: 0.5em;
}
.today .all {
	position: absolute;
	right: 0em;
	top: 0em;
	width: 10rem;
	font-size: 2rem;
	color: rgb(184, 184, 184);
}
.today .mission-list > div {
	font-size: 2.2rem;
	background-color: #ffffff;
	color: rgb(86, 86, 86);
	border-radius: 0.3em;
	margin: 0.6em auto;
	width: 90%;
	padding: 0.6em;
	box-shadow: 5px -5px 0px #d5e7e6;
}

.recent {
	background-color: #ffffff;
	border-top: solid #d5e7e6 2px;
	border-bottom: 1px transparent solid;
	box-shadow: 0px -2px 0px #d5e7e6;
	position: relative;
	margin-bottom: 0;
	padding-bottom: 0;
}
.recent h2 {
	font-size: 2.5rem;
	height: 3rem;
	line-height: 3rem;
    color: rgb(42, 42, 42);
    font-weight: 400;
    border-left: 0.3em solid #26b5a9;
    padding-left: 5px;
    margin-left: 1em;
    margin-bottom: 0.7em;
}
.recent .more {
	position: absolute;
	right: 1em;
	top: 2em;
	width: 12rem;
}
.recent .ddl-list > div {
	font-size: 2rem;
	color: rgb(98, 98, 98);
	margin: 0.5em auto;
	width: 90%;
}
.unchecked {
	background-color: #ffffff;
	border: 1px transparent solid;
	padding: 4em 0 1em 0;
	position: relative;
}
.unchecked h2 {
	font-size: 2.5rem;
	height: 3rem;
	line-height: 3rem;
    color: rgb(42, 42, 42);
    font-weight: 400;
    border-left: 0.3em solid #26b5a9;
    padding-left: 5px;
    margin: 0 0 0.5em 1em;
}
.unchecked .more {
	position: absolute;
	right: 1em;
	top: 4em;
	width: 12rem;
}
.unchecked p {
	font-size: 1.9rem;
	color: rgb(98, 98, 98);
	width: 90%;
	margin: 0 auto;
	line-height: 1.8;
}	
.red {
	color: red;
}
</style>