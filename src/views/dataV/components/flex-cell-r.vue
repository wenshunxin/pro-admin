<template>
    <div class="flex-warp">
        <h3 class="chart-title">上市公司地域分布</h3>
        <div id="flex-cell-r"></div>
    </div>
</template>

<script>
import china from "@/assets/json/china.json"
import echarts from "echarts";
import axios from "axios"
export default {
    mounted(){
        echarts.registerMap('china', china);
        this.init();
    },
    data(){
        return {
            map:null
        }
    },
    methods:{
        getMapOpt() {
            let option = option = {
                tooltip: {
                    formatter: function(params) {
                        const data = params.data;
                        return data.name + "<br />上市公司数：" + data.value;
                    }
                },
                visualMap: {
                    type: "piecewise",
                    splitNumber: 6,
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 5,
                    textGap: 5,
                    textStyle: {
                        fontSize: 10,
                        color: "#b0c2f9"
                    },
                    min: 0,
                    max: 600,
                    calculable: true,
                    seriesIndex: [0]
                },
                geo: {
                    map: "china",
                    roam: true, //开启鼠标缩放和漫游
                    zoom: 1, //地图缩放级别
                    selectedMode: "single",
                    top: 10,
                    bottom: 10,
                    layoutCenter: ["50%", "50%"],
                    //layoutSize: "100%", //保持地图宽高比
                    label: {
                        show: true,
                        fontSize: 10,
                        color: "#ceac09"
                    }
                },
                series: [{
                    name: "地域分布",
                    type: "map",
                    geoIndex: 0
                }]
            }
            return option
        },
        init(){
            let option = this.getMapOpt();
            this.map = echarts.init(document.getElementById('flex-cell-r'));
            this.map.setOption(option, true);
           
            this.handleGetData();
        },
        handleGetData(){
            axios.get("/json/region-count.json")
            .then(res=>{
                const chartData = [];
                for(let i in res.data) {
                    chartData.push({
                        name: res.data[i].region,
                        value: res.data[i].count
                    });
                }
                this.map.setOption({
                    series: [{
                        name: "地域分布",
                        data: chartData
                    }]
                });
                window.addEventListener('resize',() => this.map.resize(), false)
            })
        }
    }
}
</script>

<style lang="less" scope>
    #flex-cell-r{
        flex:1;
    }
</style>