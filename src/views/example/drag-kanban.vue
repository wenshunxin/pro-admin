<template>
    <div style="background:#e9ecef;">
        <div>
            <el-button v-for="item in btns" :type="isActive(item)" :key="item.name" size="small" @click="$router.push(item.path)">{{item.name}}</el-button>
        </div>
       <router-view/>
    </div>
</template>

<script>

export default {
    name:"DragKanban",
    components:{
      
    },
    data(){
        return {
            btns:[
                {
                    name:"Simple",
                    path:"simple"
                },
                {
                    name:"Two-Lists",
                    path:"two-lists"
                },
                {
                    name:"Clone",
                    path:"clone"
                },
                {
                    name:"Custom-Clone",
                    path:"custom-clone"
                },
                {
                    name:"Clone-on-Control",
                    path:"clone-on-control"
                }
            ]
        }
    },
    methods:{
        isActive(data){
            if(this.$route.name === data.name){
                return "primary";
            }
        }
    }
}
</script>

<style>
    .list-group-item {
        position: relative;
        display: block;
        padding: .75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.125);
        cursor: move;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        color: #212529;
    }
    .list-group-item:first-child {
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }
    .list-group-item:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: .25rem;
        border-bottom-left-radius: .25rem;
    }
</style>