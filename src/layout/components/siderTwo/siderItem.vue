<template>
    <div v-if="!item.hidden" :class="['menu-wrapper',!$store.state.layout.iscollapse?'iscollapse':'']">
        <template v-if="hasOneShowingChild(item)">
            <el-menu-item :index="onlyOneChild.path" @click="handleGotoRoute(onlyOneChild)">
                <i :class="['iconfont' ,'icon'+onlyOneChild.meta.icon]" style="font-size:14px;margin-right:5px;"></i>
                <span slot="title">{{onlyOneChild.meta.name}}</span>
            </el-menu-item>
        </template>
        <el-submenu v-else :index="item.path">
            <template slot="title" >
                <i :class="['iconfont' ,'icon'+item.meta.icon]" style="font-size:14px;margin-right:5px;"></i>
                <span slot="title">{{item.meta.name}}</span>
            </template>
            <SiderItem
                v-for="child in item.children"
                :key=" child.path"
                :item="child"
            />
        </el-submenu>
    </div>
</template>

<script>
export default {
    name:"SiderItem",
    props:{
        item:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    data(){
        return {
            onlyOneChild:null
        }
    },
    mounted(){
        // console.log(this.item)
    },
    methods:{
        hasOneShowingChild(parent){
            if(parent.hasOwnProperty("children") && !parent.meta.hasShow){
                return false;
            }
            this.onlyOneChild = parent 
            return true;
        },
        handleGotoRoute(row){
            this.$router.push(row.path)
            this.$store.dispatch("addVisitedView",Object.assign({},row))
        }
    }
}
</script>
<style>

</style>