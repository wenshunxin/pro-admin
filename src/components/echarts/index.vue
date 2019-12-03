<template>
    <div  :id="id" class="myEcharts" ref="myEcharts"></div>
</template>
<script>
import echarts from 'echarts'
import {walden} from "./walden"
export default {
    name:"MyEcharts",
    props:{
        options:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        id:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            myChart:null
        }
    },
    created(){
        
    },
    mounted(){
        this.init(this.options);  
        this.resize();
    },
    methods:{
        init(val){
            echarts.registerTheme('walden', walden)
            this.myChart = echarts.init(document.getElementById(this.id),"walden")
            // 绘制图表
            this.myChart.setOption(val);
        },
        resize(){
            window.onresize  = () => {
                return (()=>{
                    console.log("走了2")
                    this.myChart.resize();
                })();
            }
        }
    },
    watch:{
        options(val){
            this.init(val);
            this.resize();
        }
    }
}
</script>

<style >
    .myEcharts{
        width:100%;
        height: 100%;
    }
</style>