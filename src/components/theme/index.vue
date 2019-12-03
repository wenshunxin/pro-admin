<template>
    <el-color-picker v-model="themeColor" size="mini" @change="changeColor"></el-color-picker>
</template>

<script>
import theme from "@/utils/theme"
export default {
    name:"MainColor",
    data(){
        return {
            themeColor:this.$store.getters.themeColor
        }
    },
    computed:{
        color(){
            return this.$store.getters.themeColor
        }
    },
    methods:{
        changeColor(newColor){
            // console.log(window['less'],newColor)
            // window['less'].modifyVars({'@primary-color': newColor})
            this.themeColor = newColor;
            this.$store.dispatch("handleSetColor",newColor);
            localStorage.setItem("store",JSON.stringify(this.$store.state.layout))
        },
    },
    watch:{
        "color":{
            handler(val,oldColor){
                theme.handlesetColor(val,oldColor)
            },
            deep:true
        }
    }
}
</script>