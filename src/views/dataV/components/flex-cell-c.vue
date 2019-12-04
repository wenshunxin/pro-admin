<template>
    <div class="flex-warp">
        <h2 class="chart-title">统计数据</h2>
        <div class="flex-main">
            <!--  -->
            <div class="flex-item" v-for="item in list" :key="item.title">
                <div :style="{background:`url(${require('@/assets/images/icon-bg.png')}) no-repeat center`,width:'69px',height: '69px','line-height':'69px'}">
                    <img width="30" height="30" :src="item.src" alt="">
                </div>
                <div style="text-align:left;margin-left:10px;">
                    <VCountUp :start-value="0" :end-value="item.value"></VCountUp>
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VCountUp from 'vue-countupjs'
import axios from "axios"
export default {
    name:"FlexCellC",
    data(){
        return {
            end:99999,
            list:[
                {
                    src:require("@/assets/images/icon-01.png"),
                    title:"上市公司数",
                    value:"",
                    name:"listed_companies_total"
                },
                {
                    src:require("@/assets/images/icon-02.png"),
                    title:"上市证券数",
                    value:"",
                    name:"listed_securities_total"
                },
                {
                    src:require("@/assets/images/icon-03.png"),
                    title:"股票总市值（亿元）",
                    value:"",
                    name:"total_market_value"
                },
                {
                    src:require("@/assets/images/icon-04.png"),
                    title:"股票流通市值（亿元）",
                    value:"",
                    name:"circulation_market_value"
                },
                {
                    src:require("@/assets/images/icon-05.png"),
                    title:"上市平均市盈率",
                    value:"",
                    name:"sh_pe_ratio"
                },
                {
                    src:require("@/assets/images/icon-06.png"),
                    title:"深市平均市盈率",
                    value:"",
                    name:"sz_pe_ratio"
                }
            ]
        }
    },
    components:{
        VCountUp
    },
    mounted(){
        this.handleGetData();
    },
    methods:{
        handleGetData(){
            axios.get("/json/count-data.json")
            .then(res=>{
                this.list.forEach(itm=>{
                    for(let item in res.data){
                        if(itm.name === item){
                            itm['value'] = res.data[item];
                        }
                    }
                })
            })
        }
    }
}
</script>

<style lang="less" scope>
    .flex-warp{
        display: flex;
        flex-direction: column;
        .flex-main{
            flex:1;
            display: flex;
            flex-wrap: wrap;
        }
        .flex-item{
            width:50%;
            display: flex;
            text-align: center;
            align-items:center;
            img{
                vertical-align: middle;
            }
            span{
                font-weight: bold;
                color: #fff;
                font-size: 24px;
            }
            p{
                margin: 5px 0;
                line-height: 1;
                font-size: 14px;
                color: #b0c2f9;
            }
        }
    }
</style>