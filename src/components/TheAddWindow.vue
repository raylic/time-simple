<template>
    <div class="box" v-show="formShow">
        <form class="butteryhatch" @submit="addList">
            <img :src="require(`@/assets/删除键.png`)" class="delete" @click="close"/>
            <input class="input" placeholder="请输入小目标内容" name="message" autocomplete="off" v-model="inputText" >
            <div class="time" name="time">计划时间:
                <scroller :itemList="years" class="scroller"></scroller> <span style="width: 130px;">年</span> 
                <scroller :itemList="months" class="scroller"></scroller> <span style="width: 80px;">月</span> 
                <scroller :itemList="days" class="scroller"></scroller> <span  style="width: 80px;">日</span>
            </div>
            <input class="point" type="submit" value="添加"  />
        </form>
    </div>
</template>

<script>
import scroller from './Scroller.vue'

//用于查询当前
function getCurrentSelect(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i].selected == true)
            return arr[i].name;
    }
    return null;
}

export default {
    name: 'planAdd',
    props:{
        show:{
            type: Boolean,
            require: true
        }  
    },
    data: function() {
        return {
            inputText: '',
            formShow: this.show,
            years: [
                { value: 1, name: '2020', selected: true },
                { value: 2, name: '2021', selected: false },
                { value: 3, name: '2022', selected: false }
            ],
            months: [
                { value: 1, name: '5', selected: false },
                { value: 2, name: '6', selected: true },
                { value: 3, name: '7', selected: false },
                { value: 4, name: '8', selected: false },
                { value: 5, name: '9', selected: false },
                { value: 6, name: '10', selected: false}
            ],
            days: [
                { value: 1, name: '20', selected: false },
                { value: 2, name: '21', selected: true },
                { value: 3, name: '22', selected: false },
                { value: 4, name: '23', selected: false },
                { value: 5, name: '24', selected: false },
                { value: 6, name: '25', selected: false }
            ]
        }
    },
    components: {
        scroller
    },
    methods: {
        addList: function(e){
            e.preventDefault();
            let event = {
                inputText: this.inputText,
                deadline: {
                    year: getCurrentSelect(this.years),
                    month: getCurrentSelect(this.months),
                    date: getCurrentSelect(this.days)
                }
            }
            this.$emit('submit', event);
            this.close();
            //将现在的内容添加到全局 list 
        },
        close() {
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
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
.butteryhatch{
    width: 708px;
    height: 400px;
    background-image: url("../assets/addBg.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding: 0.4rem 1.25rem;
    position: absolute;
    top: calc(650px - 180px);
    left: calc(375px - 354px);
}
.butteryhatch .delete {
    position:absolute;
    top: 0;
    right: 0;
}
.input{
    position: relative;
    display: flex;
    top: 48px;
    width: 650px;
    height: 87px;
    background-color: #ffffff;
    border-radius: 27px;
    font-size: 2.175rem;
    color: #666666;
    align-items: center;
    border: 4px solid #26b5a9;
    margin: 0 auto;
    padding-left: 30px;
    outline: none;
}
.input::-webkit-input-placeholder {
    color: #acacac;
}
.input:-moz-placeholder {
    color: #acacac;
}
.input:-ms-input-placeholder {
    color: #acacac;
}
/*可以添加以前、今天、以后的计划，每天可添加不止一个，如果是今天或者以后的则该小计划会出现在当天的计划页面
，这里一旦添加了就只能到当天详情计划界面删除了，这样不到当天就不能删除，也许可防一点点把以后的计划不断往后延（这个设计是不是不人性？）*/
.time{
    position: relative;
    font-size: 2.34rem;
    color: #686868;
    margin: 95px 80px 50px 80px;
    overflow: visible;
}

.time > span {
    width: 100px;
    text-align: right;
    display: inline-block;
}
.year{
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 2px solid #26b5a9;
}
.month{
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 2px solid #26b5a9;
}
.point{
    background-color: #26b5a9;
    padding: 10px 0;
    width: 300px;
    display: block;
    text-align: center;
    letter-spacing: 10px;
    font-size: 2.375rem;
    color: #ffffff;
    border-radius: 10px;
    margin: 0 auto;
    border: none;
    outline: none;
}
.button{
    display: block;
    width: 300px;
    height: 60px;
    background-color: #26b5a9;
    border-radius: 20px;
    margin: 0px;
    font-size: 2.375rem;
    color: #ffffff;
    align-items: center;
}
</style>