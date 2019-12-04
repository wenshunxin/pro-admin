<template>
    <div class="flex-warp">
        <h3 class="chart-title">CSRC行业分类</h3>
        <div id="flex-cell-lr" style="flex:1;"></div>
    </div>
</template>

<script>
import axios from "axios"
import echarts from "echarts"
export default {
    data(){
        return {
            myEcharts:null
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.myEcharts = echarts.init(document.getElementById("flex-cell-lr"));

            axios.get("/json/csrc-industry.json")
            .then(res=>{
                const chartData = [];
                for(let i in res.data) {
                    chartData.push({
                        name: res.data[i].alias,
                        value: res.data[i].stock
                    });
                }
                let options = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b0}<br />股票数：{c0}<br />占比：{d0}%"
                    },
                    legend: {
                        type: "scroll",
                        orient: "vertical",
                        padding: 0,
                        top: 15,
                        right: 0,
                        itemGap: 5,
                        itemWidth: 10,
                        itemHeight: 10,
                        textStyle: {
                            fontSize: 10,
                            color: "#b0c2f9"
                        }
                    },
                    series: [{
                        name: "CSRC行业分类",
                        data: chartData,
                        type: "pie",
                        center: ["47%", "55%"],
                        radius: ["30%", "85%"]
                    }]
                };
                this.myEcharts.setOption(options);
            })

            
            window.addEventListener("resize",()=>{this.myEcharts.resize()},false)
        }
    }
}
</script>

<style>

</style>