<template>
    <div class="flex-warp">
        <h3 class="chart-title">2018年月度股票情况及预测</h3>
        <div id="flex-cell-lc" style="flex:1;"></div>
    </div>
</template>

<script>
import axios from "axios"
import echarts from "echarts"
export default {
    data(){
        return {
			options:{},
			myCharts:{}
        }
	},
    mounted(){
		this.handleGetData();
    },
    methods:{
        handleGetData(){
			this.myChart = echarts.init(document.getElementById('flex-cell-lc'),"walden")
            axios.get("/json/month-count.json")
            .then(res=>{
                const xData = [],yData1 = [],yData2 = [],yData3 = [];
                for(let i in res.data) {
                    xData.push(res.data[i].month);
                    yData1.push(res.data[i].sh_market_capitalization);
                    yData2.push(res.data[i].sh_transaction_amount);
                    yData3.push(res.data[i].sh_pe_ratio);
                }
                this.options = {
                    tooltip: {
						trigger: "axis",
						axisPointer: {
							type: "none"
						}
					},
					legend: {
						left: "center",
						bottom: 3,
						itemWidth: 15,
						itemHeight: 10,
						textStyle: {
							fontSize: 12,
							color: "#b0c2f9"
						},
						data: ["市价总值", "成交总额", "平均市盈率"]
                    },
                    grid: {
						top: 40,
						bottom: 50,
						left: 60,
						right: 60
					},
					xAxis: {
						type: "category",
						axisLine: {
							lineStyle: {color: "#b0c2f9"}
                        },
                         splitLine:{show: false},
						axisTick: {show: false},
						axisLabel: {
							fontSize: 12,
							color: "#b0c2f9"
                        },
                        data: xData,
					},
					yAxis: [{
						name: "金额",
						type: "value",
						splitNumber: 5,
						axisLine: {
							lineStyle: {color: "#b0c2f9"}
						},
						splitLine: {show: false},
						axisTick: {color: "#b0c2f9"},
						axisLabel: {
							fontSize: 12,
							color: "#b0c2f9",
							formatter: (value) => {
								return parseInt(value / 10000) + "万亿";
							}
						}
					}, {
						name: "市盈率",
						type: "value",
						splitNumber: 5,
						maxInterval: 5,
						minInterval: 5,
						interval: 5,
						axisLine: {
							lineStyle: {color: "#b0c2f9"}
						},
						splitLine: {show: false},
						axisTick: {color: "#b0c2f9"},
						axisLabel: {
							fontSize: 12,
							color: "#b0c2f9"
						}
					}],
					
					series: [{
                        name: "市价总值",
                        data: yData1,
						type: "pictorialBar",
						symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
						barCategoryGap: "40%",
						itemStyle: {
							color: function(params) {
								if(params.dataIndex >= 10) {
									return "rgba(119, 96, 246, 0.5)";
								}
								return "rgba(119, 96, 246, 1)";
							}
						},
						markPoint: {
							itemStyle: {
								color: "rgba(119, 96, 246, 1)"
							},
							data: [{
								name: "最大值",
								type: "max"
							}]
						},
						markLine: {
							lineStyle: {
								color: "rgba(119, 96, 246, 1)"
							},
							label: {
								position: "middle",
								formatter: "月度平均市价总值：{c}亿元"
							},
							data: [{
								name: "平均值",
								type: "average"
							}]
						}
					}, {
                        name: "成交总额",
                        data: yData2,
						type: "pictorialBar",
						symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
						barCategoryGap: "40%",
						itemStyle: {
							color: function(params) {
								if(params.dataIndex >= 10) {
									return "rgba(230, 182, 0, 0.5)";
								}
								return "rgba(230, 182, 0, 1)";
							}
						},
						markPoint: {
							itemStyle: {
								color: "rgba(230, 182, 0, 1)"
							},
							data: [{
								name: "最大值",
								type: "max"
							}]
						},
						markLine: {
							lineStyle: {
								color: "rgba(230, 182, 0, 1)"
							},
							label: {
								position: "middle",
								formatter: "月度平均成交总额：{c}亿元"
							},
							data: [{
								name: "平均值",
								type: "average"
							}]
						}
					}, {
                        name: "平均市盈率",
                        data: yData3,
						type: "line",
						yAxisIndex: 1
					}]
				}
				this.myChart.setOption(this.options,true);
				window.addEventListener('resize',() => {this.myChart.resize()}, false);
            })
        }
	},
	watch:{
		
	}
}
</script>

<style>

</style>