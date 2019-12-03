<template>
    <el-drawer
        :visible.sync="isDrawerOpen"
        :direction="direction"
        :show-close="false"
        :before-close="handleColse"
        custom-class="custom-class"
    >   
       <div>
           <span>{{$t('settings.title')}}</span>
           <div class="item-list">
               <span>{{$t('settings.theme')}}-1</span>
               <ThemeColor/>
           </div>

           <div class="item-list">
               <span>{{$t('settings.theme')}}-2</span>
               <el-select v-model="layoutColor" placeholder="请选择" style="width:160px;" @change="handleChangeSelect">
                   <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
               </el-select>
           </div>
           <div class="item-list">
                <span>显示底部栏</span>
                <el-switch v-model="isShowFooter" ></el-switch>
           </div>

       </div>
    </el-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import ThemeColor from "@/components/theme"
import theme from "@/utils/theme"

export default {
    name:"Setting",
    components:{
        ThemeColor
    },
    data() {
        return {
            direction: 'rtl',
            value:"",
            options:[
                {
                    label:"element8B5F18",
                    value:"element8B5F18"
                },
                {
                    label:"element8B187A",
                    value:"element8B187A"
                },
                {
                    label:"element17DAAD",
                    value:"element17DAAD"
                },
                {
                    label:"element188B5B",
                    value:"element188B5B"
                },
                {
                    label:"elementA70C2B",
                    value:"elementA70C2B"
                }
            ]
        };
    },
    computed:{
        ...mapGetters({
            isDrawerOpen:"isDrawerOpen",
        }),
        isShowFooter:{
            get(){
                return this.$store.getters.isShowFooter;
            },
            set(value){
                this.$store.dispatch("handleShowFooter",value)
            }

        },
        layoutColor:{
            get(){
                return this.$store.state.layout.layoutColor;
            },
            set(value){
                this.$store.dispatch("handleSetLayoutColor",value)
            }
        }
    },
    methods: {
        handleColse(){
            this.$store.dispatch("handleOpenDrawer",false)
        },
        handleChangeSelect(value){

            let loading = this.$loading();
            theme.handleSetTheme(value,true);
            this.$store.dispatch('handleOpenDrawer',false)
            this.$store.dispatch("handleSetLayoutColor",value).then(()=>{
                setTimeout(()=>{
                    loading.close();
                    this.$message.success("换肤成功")
                },2000)
            });
            localStorage.setItem("store",JSON.stringify(this.$store.state.layout))
        }
    }
}
</script>

<style  lang="less" scope>
    .custom-class{
        width:300px !important;
        padding: 0 30px;
    }
    .item-list{
        display: flex;
        justify-content:space-between;
        align-items:center;
        color: rgba(0,0,0,.65);
        font-size: 14px;
        padding: 5px 0;
    }
</style>