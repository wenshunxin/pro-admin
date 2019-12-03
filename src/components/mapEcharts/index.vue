<template>
    <div id="myMapEcharts" @click="showChinaMap"></div>
</template>

<script>
import china from "@/assets/json/china.json"
import echarts from "echarts";
import {walden} from "@/components/echarts/walden"
var provinces = ['shanghai', 'hebei','shanxi','neimenggu','liaoning','jilin','heilongjiang','jiangsu','zhejiang','anhui','fujian','jiangxi','shandong','henan','hubei','hunan','guangdong','guangxi','hainan','sichuan','guizhou','yunnan','xizang','shanxi1','gansu','qinghai','ningxia','xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan'];
var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林','黑龙江',  '江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾'];
export default {
    name:"MyMapEcharts",
    data(){
        return {
            map:""
        }
    },
    mounted(){
        this.initMap();
    },
    methods:{
        getMapOpt(place) {
            let option = option = {
                // backgroundColor: '#404a59',
                title: {
                    text: "mapDemo",
                    subtext: "data from map",
                    left: "center"
                    },
                geo: {
                    map: place?place:'china',
                    label: {
                        show:true,
                        emphasis: {
                            show: true
                        }
                    },
                    roam: true,
                    zoom:1.2,
                    itemStyle: {
                        normal: {
                            areaColor: '#42b983',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    },
                    regions: [{
                        name: '广东',
                        itemStyle: {
                            areaColor: 'red',
                            color: 'red'
                        }
                    }]
                },
            }
            return option
        },
        initMap(){
            let option = this.getMapOpt();
            echarts.registerMap('china', china)
            echarts.registerTheme('walden', walden)
            this.map = echarts.init(document.getElementById('myMapEcharts'));
            this.map.setOption(option, true);
            this.map.on('click', (param)=> {
                event.stopPropagation()// 阻止冒泡
                // 找到省份名
                let provinceIndex = provincesText.findIndex(x=>{
                    return param.name ===x
                });
                if(provinceIndex===-1)return
                let provinceAlphabet = provinces[provinceIndex]
                this.getProvinceMapOpt(provinceAlphabet)
            })
        },
        getProvinceMapOpt(provinceAlphabet){
            let data = require(`@/assets/json/province/${provinceAlphabet}.json`);
            echarts.registerMap(provinceAlphabet, data)
            let option = this.getMapOpt(provinceAlphabet)
            this.map.setOption(option, true);
        },
        //显示中国地图
        showChinaMap(){
            let option = this.getMapOpt()
            this.map.setOption(option, true);
        }
    }
}
</script>
<style>
    #myMapEcharts{
        width:100%;
        height:100%;
    }
</style>