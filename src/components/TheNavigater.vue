<template>
    <div class="container">
        <div class="navigater" :class="this.$route.name == 'Home' ? 'default-nav' : 'green-nav'">
                <router-link :to="{name: 'Home'}">
                    <div class="imgbox"><img :src="require(`@/assets/${this.$route.name == 'Home'? '主页图标.png' :'点击前主页图标.png'}`)"/></div>
                    <span id="text">主页</span>
                </router-link>
                <router-link :to="{name: 'Long-term'}" >
                    <div>
                        <div class="imgbox" >
                            <img v-if="this.$route.name == 'Home'" :src="require(`@/assets/${this.$route.name == 'Long-term'? '长期图标.png' : '点击前长期图标.png' }`)"/>
                            <img v-else :src="require(`@/assets/${this.$route.name == 'Long-term'? '长期图标.png' : '点击前长期图标2.png' }`)"/>
                        </div>
                        <span id="text">长期</span>
                    </div>
                </router-link>
                <router-link :to="{name: 'Today-detail'}">
                    <div>
                        <div class="imgbox" >
                            <img v-if="this.$route.name == 'Home'" :src="require(`@/assets/${this.$route.name == 'Today-detail'? '今日图标.png' :'点击前今日图标.png'}`)"/>
                            <img v-else :src="require(`@/assets/${this.$route.name == 'Today-detail'? '今日图标.png' :'点击前今日图标2.png'}`)"/>
                        </div>
                        <span id="text">今日</span>
                    </div>
                </router-link>
                
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods: {
    }
}
</script>
<style scoped>
*{
    box-sizing: border-box;
}
.container{
    background-color: transparent;
}
.navigater  {
	background-color: #ffffff;
	border-top: solid #d5e7e6 2px;
	margin-top: 1rem;
	padding: 0;
	display: flex;
	justify-content: space-around;
}
.navigater > * {
    padding: 1rem 0.2rem;
	text-align: center;
    text-decoration: none;
    border-top: transparent 0.5rem solid;
}
.default-nav > * {
    color:rgb(188, 191, 191);
}

.green-nav{
    box-shadow: 0.5rem 0 0.5rem #26b5a9;
    background-color: #26b5a9;
}
.green-nav > * {
    color: rgb(131, 225, 217);

}
.default-nav .router-link-exact-active{
    color:#26b5a9;
    border-top: #26b5a9 0.5rem solid;
}
.green-nav .router-link-exact-active{
    color: #ffffff;
    border-top: #ffffff 0.5rem solid;
}


</style>