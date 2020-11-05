<template>
  <div id="app">
    <router-view class="view" />
    <TheNavigater class="nav" />
  </div>
</template>
<script>
import TheNavigater from "@/components/TheNavigater.vue";
export default {
  data(){
    return{
    }
  },
  components:{
    TheNavigater
  }
}
</script>
<style>
* {
	box-sizing: border-box;
}
#app {
  width: 750px;
  height: 1334px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
}

.nav {
  position: sticky;
  bottom: 0;
  width: 100%;
}
#app::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
}

#app::-webkit-scrollbar-track {
    background-color: transparent;

}

#app::-webkit-scrollbar-thumb {
    background: transparent;

}

#app::-webkit-scrollbar-button:start {
    background: none;
    background-size: 0;
}

#app::-webkit-scrollbar-button:end {
    background: none;
    background-size: 0;
}
</style>
