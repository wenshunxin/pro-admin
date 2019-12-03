<template>
    <div v-if="!item.hidden" :class="['menu-wrapper',!$store.state.layout.iscollapse?'iscollapse':'']">
        <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow ">
            <el-menu-item :index="resolvePath(onlyOneChild.path)" @click="handleGotoRoute(onlyOneChild)">
                <!-- <i v-if="onlyOneChild.meta.icon" :class="" /> -->
                <i :class="['iconfont' ,'icon'+onlyOneChild.meta.icon]" style="font-size:14px;margin-right:5px;"></i>
                <span slot="title">{{$t('route.'+onlyOneChild.meta.title)}}</span>
            </el-menu-item>
        </template>
        <el-submenu v-else :index="resolvePath(item.path)">
            <template slot="title">
               <i :class="['iconfont' ,'icon'+item.meta.icon]" style="font-size:14px;margin-right:5px;"></i>
                <span slot="title">{{$t('route.'+item.meta.title)}}</span>
            </template>
            <SiderbarItem
                v-for="child in item.children"
                :key=" child.path"
                :item="child"
                :base-path="resolvePath(child.path)"
            />
        </el-submenu>
    </div>
</template>

<script>
import path from 'path'
export default {
    name:"SiderbarItem",
    props:{
        item:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        basePath:{
            type:String,
            default:""
        }
    },
    data(){
        this.onlyOneChild = null
        return {

        }
    },
    methods:{
        handleGotoRoute(row){
            this.$store.dispatch("addVisitedView",Object.assign({},row,{path:this.resolvePath(row.path)}))
            this.$router.push(this.resolvePath(row.path))
        },
        hasOneShowingChild(children=[],parent){
            const showingChildren = children.filter(item=>{
                if(item.hidden){
                    return false;
                }else{
                    this.onlyOneChild = item;
                    return true;
                }
            });
            if(showingChildren.length === 1){
                return true;
            }
            if(showingChildren.length === 0 ){
                this.onlyOneChild = { ...parent,path:"",noShowingChildren:true};
                return true;
            }
            return false;
        },
        resolvePath(routePath){
            if (this.isExternal(routePath)) {
                return routePath
            }
            if (this.isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
           
        },
        isExternal(path) {
            return /^(https?:|mailto:|tel:)/.test(path)
        }
    }
}
</script>

<style lang="less">
    
</style>