<template>
    <div>
        <el-row :gutter="10" style="width:100%;">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span v-if="options.title && options.title.text">{{options.title.text}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <MyEcharts :id="'myEchartName1'" :options="options"/>
                    </el-card>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span v-if="options1.title && options1.title.text">{{options1.title.text}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <MyEcharts :id="'myEchart3'" :options="options1"/>
                    </el-card>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span v-if="options4.title && options4.title.text">{{options4.title.text}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <MyEcharts :id="'myEchart4'" :options="options4"/>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MyEcharts from "@/components/echarts"
export default {
    name:"PagePermission",
    components:{
        MyEcharts
    },
    data(){
        return {
            options:{
                title: { text: '在Vue中使用echarts' ,show:false},
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            options1:{ },
            options4:{
                title:{
                    text:"嵌套环形图"
                    ,show:false
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直达', selected:true},
                            {value:679, name:'营销广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                // shadowBlur:3,
                                // shadowOffsetX: 2,
                                // shadowOffsetY: 2,
                                // shadowColor: '#999',
                                // padding: [0, 7],
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    // abg: {
                                    //     backgroundColor: '#333',
                                    //     width: '100%',
                                    //     align: 'right',
                                    //     height: 22,
                                    //     borderRadius: [4, 4, 0, 0]
                                    // },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data:[
                            {value:335, name:'直达'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1048, name:'百度'},
                            {value:251, name:'谷歌'},
                            {value:147, name:'必应'},
                            {value:102, name:'其他'}
                        ]
                    }
                ]
            }
        }
    },
    mounted(){
        var data = [];
        for (var i = 0; i <= 360; i++) {
            var t = i / 180 * Math.PI;
            var r = Math.sin(2 * t) * Math.cos(2 * t);
            data.push([r, i]);
        }

        this.options1 = {
            title: {
                text: '极坐标双数值轴',
                show:false
            },
            legend: {
                data: ['line']
            },
            polar: {
                center: ['50%', '54%']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            angleAxis: {
                type: 'value',
                startAngle: 0
            },
            radiusAxis: {
                min: 0
            },
            series: [{
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                showSymbol: false,
                data: data
            }],
            animationDuration: 2000
        };
    }
}
</script>

<style>
    .el-card__body{
        height:400px;
    }
    .el-col{
        margin-top:20px;
    }
</style>