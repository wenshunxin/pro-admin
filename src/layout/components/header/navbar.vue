<template>
    <div id="header">
        <div>
            <i :class="[collapse?'el-icon-s-fold':'el-icon-s-unfold','el-icon-s']" @click="handleSetCollapse(!collapse)"></i>
            <!-- <Breadcrumb/> -->
            <router-link to="/datav">大数据</router-link>
        </div>
        <div style="display:flex;cursor:pointer;align-items:center;">
            <el-popover
                placement="bottom-end"
                width="600"
                trigger="click">
                <Tabs/>
                 <el-badge is-dot type="primary" slot="reference">
                    <i class="el-icon-bell" style="font-size:16px;font-weight:600;cursor:pointer;"></i>
                </el-badge>
            </el-popover>

            <LangSelect style="margin:0 10px;"/>
            <Dropdown />
            <i class="el-icon-more" style="font-size:24px;" @click="$store.dispatch('handleOpenDrawer',true)"/>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
// import Breadcrumb from "./breadcrumb.vue"
import Dropdown from "./dropdown"
import LangSelect from "./langselect"
import Tabs from "@/views/example/tab"
export default {
    name:"navbar",
    components:{
        // Breadcrumb,
        Dropdown,
        LangSelect,
        Tabs
    },
    computed:{
        collapse(){
            return this.$store.getters.collapse
        }
    },
    methods:{
        ...mapActions([
            "handleSetCollapse"
        ])
    }
}
</script>

<style lang="less" scoped>
    #header{
        line-height: 60px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        .el-icon-s{
            font-size: 24px;
            cursor: pointer;
            margin-right: 10px;
        }
    }
    .el-icon-more{
        position: absolute;
        transform: rotate(90deg);
        right:0;
    }
    /deep/ .el-badge__content.is-fixed.is-dot{
        top:22px !important;
        right: 7px !important;
    }
</style>