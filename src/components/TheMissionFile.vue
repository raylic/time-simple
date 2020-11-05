<template>
    <div class="box">
        <div class="container">
            <img :src="require(`@/assets/删除键2.png`)" class="delete" @click="close"/>
            <div class="title">任务文件</div>
            <div class="top-banner">
                <div class="input">
                    请输入新增文件地址
                </div>
                <div class="save">
                    <div class="text">保存</div>
                </div>
            </div>
            <div class="title2">现有进度</div>
            <div class="documents">
                <ul class="do">
                    <li id="docu">
                        <div class=sign><img :src="require(`@/assets/pic-icon.png`)"></div>
                        <div class="text">
                            <img :src="require(`@/assets/delete-icon.png`)">
                            <div class="name">实验ppt</div>
                            <div class="detail">内部存储/BaiduNetdisk/资源/老师板书...</div>
                        </div>                   
                    </li>
                    <div class="separate"></div>
                    <li id="docu">
                        <div class=sign><img :src="require(`@/assets/file-icon.png`)"></div>
                        <div class="text">
                            <img :src="require(`@/assets/delete-icon.png`)">
                            <div class="name">实验说明文件</div>
                            <div class="detail">内部存储/BaiduNetdisk/资源/老师板书...</div>
                        </div>                   
                    </li>
                    <div class="separate"></div>
                    <li id="docu">
                        <div class=sign><img :src="require(`@/assets/book-icon.png`)"></div>
                        <div class="text">
                            <img :src="require(`@/assets/delete-icon.png`)">
                            <div class="name">期末提交实验报告通知</div>
                            <div class="detail">https://blog.csdn.net/weixin_382307......</div>
                        </div>                   
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
body{
    font-size: 12px;
}
*{
    box-sizing: border-box;
}
.box{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(200,200,200,0.5)
}
.container{
    width: 708px;
    height: 700px;
    background-image: url("../assets/fileBg.png");
    background-size: 100% 170%;
    margin: 0 auto;
    padding: 0.4rem 1.25rem;
    position: absolute;
    top: calc(650px - 300px);
    left: calc(375px - 354px);
    border-radius: 2em;
}
.container .delete {
    position:absolute;
    top: 0;
    right: 0;
}
.title{
    font-size: 1.64rem;
    color: #ffffff;
    margin:1.625rem 1.625rem 1.17rem 1.17rem;
}
.top-banner{
    background-color: #ffffff;
    border-radius: 27px;
    padding: 0.3em 0.3em 0.3em 0.5em;
    position: relative;
    height: 4em;
}
.top-banner .input{
    position: absolute;
    box-sizing: initial;
    font-size: 2.375rem;
    color: #acacac;
    margin: 0rem;
}
.top-banner .save{
    display:flex;
    float: right;
    width: 20%;
    height: 100%;
    background-color: #26b5a9;
    margin: 0rem 0rem 0rem 0rem;
    border-radius: 0rem 1.33rem 1.33rem 0rem;
    align-items: center;
}
.top-banner .save .text{
    margin: 0 auto;
    font-size: 2.375rem;
    color: #f6f6f6;
}
.clear{
    clear: both;
}
.title2{
    font-size: 1.64rem;
    color: rgb(133, 133, 133);
    margin: 1.625rem 0rem 1.17rem 1.17rem;
}
.documents{
    background-color: #ffffff;
    border-radius: 5px;
    padding: 2rem 0.5rem;
    margin: 5px auto;
}
.documents .do{
    display: block;
    position: relative;
    padding: 0;
    font-size: 1rem;
    margin: 0rem 0 0rem 0;
}
.documents .do .sign img{
    width: 4.8125rem;
    height: 4.8125rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
    position: absolute;
}

.documents #docu{
    display: inline-block;
}
.text{
    margin: 0rem 0rem 0rem 5rem;
}
.text img{
    width: 1.68rem;
    height: 1.75rem;
    right: 0;
    margin-right: 1rem;
    margin-top: 1.5rem;
    position: absolute;
}
.name{
    color:#4f5050;
    font-size:2.375rem;
}
.detail{
    color: #7e8181;
    font-size: 1.625rem;
}
.separate{
    background-color: #9d9d9d;
    height: 0.10rem;
    width: 100%;
    margin:2rem 0rem 2rem 0rem;
}

</style>