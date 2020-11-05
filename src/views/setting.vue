<template>
    <div class="container">
        <div class="title">设置</div>
        <div class="documents">
            <ul class="do">
                <li id="docu">
                    <div class="text">
                        <!-- <img id="img1" onclick="rechoose1()" src="img/no.png"> -->
                        开启锁屏通知
                        <Switches v-model="enabled[0]" type-bold="true" class="switches" key="1"></Switches>
                    </div>
                </li>
                <div class="separate"></div>
                <li id="docu">
                    <div class="text">
                        <!-- <img id="img2" onclick="rechoose2()" src="img/no.png"> -->
                        到期提醒
                        <Switches v-model="enabled[1]" type-bold="true" class="switches" key="2"></Switches>
                    </div>                   
                </li>
                <div class="separate"></div>
                <li id="docu">
                    <div class="text">
                        <!-- <img id="img3" onclick="rechoose3()" src="img/no.png"> -->
                        跨软件收录
                        <Switches v-model="enabled[2]" type-bold="true" class="switches" key="3"></Switches>
                    </div>                   
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Switches from '@/components/Switches'    
export default {
    components: {
        Switches
    },
    data () {
        return {
            enabled:[true,false,false]
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
.title{
    height: 115px;
    background-color: #26b5a9;
    display: flex;
    font-size: 38px;
    color: #d9f7f4;
    display: block;
    text-align: center;
    padding-top:34px ;
}
.clear{
    clear: both;
}
.documents{
    background-color: #ffffff;
    border-radius: 5px;
    padding: 2rem 0.5rem;
    margin: 50px 20px ;
}
.documents .do{
    display: block;
    position: relative;
    padding: 0;
    font-size: 1rem;
    margin: 0rem 0 0rem 0;
}

.documents #docu{
    display: block;
}
.text{
    color:#4f5050;
    font-size:2.375rem;
    margin-right: 31px;
}
#docu {
    position: relative;
}
.text .switches {
    position: absolute;
    right: 2rem;
    top: 0.3rem; 
}
.separate{
    background-color: #9d9d9d;
    height: 0.10rem;
    width: 100%;
    margin:2rem 0rem 2rem 0rem;
}


</style>