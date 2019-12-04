<template>
    <div id="sugar-root" class="animated  slideInLeft" :style="{'transform':scale,'background':`url(${bg}) 0% 0% / 100% 100%`}">
        <div id="header" :style="{'background':`url(${headerbg})  0px 0px / 100% 100%`}">
            <span :style="{'transform':scale,display:'inline-block'}">上交所上市公司全景概览</span>
            <span></span>
        </div>
        <div id="main">
            <el-row style="flex:1;display:flex;" :gutter="24">
                <el-col  :span="7"  style="flex:1;">
                    <FlexCellI/>
                </el-col>
                <el-col :span="10"  style="flex:1;">
                    <FlexCellC/>
                </el-col>
                <el-col :span="7"  style="flex:1;">
                    <FlexCellr/>
                </el-col>
            </el-row>
            <el-row style="flex:1;display:flex;">
                <el-col :span="17" style="flex:1;">
                    <FlexCelllc ref="FlexCelllc"/>
                </el-col>
                <el-col :span="7" style="flex:1;">
                    <FlexCelllr></FlexCelllr>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import FlexCellI from "./components/flex-cell-l"
import FlexCellC from "./components/flex-cell-c"
import FlexCelllc from "./components/flex-cell-lc"
import FlexCellr from "./components/flex-cell-r"
import FlexCelllr from "./components/flex-cell-lr"
export default {
    data(){
        return {
            scale:"scale(1, 1)",
            bg:require("@/assets/images/bg.png"),
            headerbg:require("@/assets/images/header.png")
        }
    },
    components:{
        FlexCellI,
        FlexCellC,
        FlexCelllc,
        FlexCellr,
        FlexCelllr
    },
    mounted(){
        const that = this;
        window.onresize = () => {
            return (()=>{
                window.screenWidth = document.body.clientWidth;
                window.screenHeight = document.body.clientHeight;
                let screenWidth = window.screenWidth;
                let screenHeight = window.screenHeight;  
                setTimeout(()=>{
                    that.scale = `scale(${screenWidth/1920},${screenHeight/1080})`
                },1000)
            })();
        }
    }
}
</script>

<style lang="less" scope>
    httml,body{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    #sugar-root{
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: scale(1, 1);
        background: rgb(0, 0, 0);
        transition: all .3s linear;
        display: flex;
        flex-direction: column;
    }
    #header{
        width:100%;
        height:84px;
        line-height: 74px;
        text-align: center;
        font-family: "Microsoft Yahei", Arial, sans-serif;
        color: rgb(255, 255, 255);
        font-weight: bold;
        font-size: 32px;
    }
    #main{
        flex:1;
        display: flex;
        flex-direction: column;
        color:#fff;
    }
    .el-col{
        flex:1;
    }
</style>