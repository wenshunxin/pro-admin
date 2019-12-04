<template>
    <div class="flex-warp">
        <h3 class="chart-title">市价总值排行Top10</h3>
        <div  id="flex-cell-l" style="flex:1;"></div>
    </div>
</template>
<script>
import axios from "axios"
import echarts from "echarts"
import {walden} from "@/components/echarts/walden"
export default {
    data(){
        return {
            options:{},
            myChart:{}
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            echarts.registerTheme('walden', walden);
            this.myChart = echarts.init(document.getElementById('flex-cell-l'),"walden")
            // 绘制图表
            axios.get("/json/ranking-list.json")
            .then(res=>{
                let xData = [],yData=[];
                res.data.forEach(item=>{
                    xData.push(item.market_capitalization);
                    yData.push(item.stock_name);
                })
                this.options = {
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow"
                        },
                        formatter: function(params) {
                            const param = params[0];
                            const marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#e6b600;"></span>';
                            const suffix = '<span style="margin-left:5px;font-size:12px;">亿元</span>';
                            return param.name + "<br />" +
                                marker + "排名：" + (param.dataIndex+1) + "<br />" +
                                marker + "市价总值：" + param.value + suffix;
                        }
                    },
                    grid: {
                        top: 10,
                        bottom: 10,
                        left: 60
                    },
                    xAxis: {
                        show: false,
                        type: "value",
                    },
                    yAxis: {
                        type: "category",
                        inverse: true,
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine:{show: false},
                        axisLabel: {
                            fontSize: 12,
                            color: "#b0c2f9"
                        },
                        data:yData
                    },
                    series: [{
                        name: "市价总值排行",
                        type: "bar",
                        data:xData,
                        barCategoryGap: "60%",
                        label: {
                            show: true,
                            position: "right",
                            fontSize: 12,
                            color: "#188df0",
                            emphasis: {
                                color: "#e6b600"
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 1,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [
                                        {offset: 0,color: "#b0c2f9"},
                                        {offset: 0.5, color: '#188df0'},
                                        {offset: 1, color: '#185bff'}
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                            emphasis: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 1,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [
                                        {offset: 0, color: '#b0c2f9'},
                                        {offset: 0.7, color: '#e6b600'},
                                        {offset: 1, color: '#ceac09'}
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    }]
                }
                this.myChart.setOption(this.options);
            });
            window.addEventListener('resize',() => this.myChart.resize(), false)
        }
    }
}
</script>

<style lang="less" scope>
    .flex-warp{
        width:100%;
        height: 100%;
        padding-left: 20px;
        box-sizing: border-box;
        display: flex;
    }
    .chart-title{
        font-weight: normal;
        color: #9aa8d4;
        height: 24px;
        font-size: 18px;
    }
</style>