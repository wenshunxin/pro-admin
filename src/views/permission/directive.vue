<template>
    <div id="directive">
        <EchartComponent/>
    </div>
</template>

<script>
import EchartComponent from "@/components/mapEcharts"
export default {
    name:"Directive",
    components:{
        EchartComponent
    },
    data(){
        return {
            options:{

            }
        }
    }
}
</script>

<style lang="less" scoped>
    #directive{
        position: absolute;
        top:20px;
        right:20px;
        left:20px;
        bottom: 20px;
    }
</style>