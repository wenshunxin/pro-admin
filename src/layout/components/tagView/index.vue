<template>
    <div id="tagView">
        <!-- @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''" -->
        <ScrollPane ref="scrollPane">
            <router-link
               
                v-for="tag in visitedViews"
                ref="tag"
                :key="tag.path"
                :class="isActive(tag)?'active':''"
                :style="{'background':isActive(tag)? layoutColor:'#fff'}"
                :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                tag="span"
                class="tags-view-item"
                @contextmenu.prevent.native="openMenu(tag,$event)"
            >
                {{ $t('route.'+tag.title) }}
                <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
            </router-link>
        </ScrollPane>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">刷新当前页</li>
            <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭当前页</li>
            <li @click="closeOthersTags">关闭其他页</li>
            <li @click="closeAllTags(selectedTag)">关闭所有页</li>
        </ul>
    </div>
</template>

<script>
import ScrollPane from "./scollbar"
export default {
    name:"TagView",
    components:{
        ScrollPane
    },
    data(){
        return {
            visible: false,
            top: 0,
            left: 0,
            selectedTag: {},
        }
    },
    computed:{
        visitedViews(){
            return this.$store.state.tagView.visitedViews
        },
        layoutColor(){
            let color = String(this.$store.state.layout.layoutColor).split("element")[1];
            return "#"+color
        }
    },
    watch:{
        $route(){
           this.addViewTags()
           this.moveToCurrentTag();
        },
        visible(value) {
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            }else{
                document.body.removeEventListener('click', this.closeMenu)
            }
        }
    },
    mounted() {
        this.initTags();
        this.addViewTags();
    },
    methods:{
        // 初始化默认加载tag
        initTags(){
            this.$store.dispatch('addVisitedView',{
                name:"dashboard",
                path:"/dashboard",
                meta:{
                    affix:true,
                    icon:"dashboard",
                    title:"dashboard"
                }
            })
        },
        // 页面初始化获取标签
        generateRoute(){
            if (this.$route.name) {
              return this.$route
            }
            return false
        },
        // 页面初始化添加标签
        addViewTags() {
            const route = this.generateRoute();
            if (!route) {
                return false
            }
            this.$store.dispatch('addVisitedView', route)
        },
        // 设置选中的样式
        isActive(route) {
            return route.path === this.$route.path
        },
        // 判断是否显示tag的关闭按键
        isAffix(tag) {
            return tag.meta && tag.meta.affix
        },
        // 关闭tag函数
        closeSelectedTag(tag){
            this.$store.dispatch('delVisitedView',tag)
            .then(({visitedViews})=>{
                if (this.isActive(tag)) {
                    this.toLastView(visitedViews, tag)
                }
            });  
        },
        toLastView(visitedViews, view) {
            const latestView = visitedViews.slice(-1)[0];
            if (latestView) {
                this.$router.push(latestView.path)
            } else {
                if (view.name === 'Dashboard') {
                    this.$router.replace({ path: '/redirect' + view.fullPath })
                } else {
                    this.$router.push('/')
                }
            }
        },
        // 右键事件
        openMenu(tag,e){
            const menuMinWidth = 105
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            // console.log(offsetLeft)
            const offsetWidth = this.$el.offsetWidth // container width
            // console.log(offsetWidth)
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX - offsetLeft + 15 // 15: margin right
            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }
            this.top = e.clientY-60;
            this.visible = true
            this.selectedTag = tag
        },
        // 关闭右键事件
        closeMenu() {
          this.visible = false
        },
        // 刷新当前页面
        refreshSelectedTag(tag){
            this.$nextTick(() => {
                this.$router.replace({
                    path: '/redirect' + tag.path
                })
            })
        },
        // 关闭所有的标签
        closeAllTags(tag){
            this.$store.dispatch("delAllView",tag)
            .then(({visitedViews})=>{
                this.toLastView(visitedViews, tag)
            })
        },
        // 关闭其他标签
        closeOthersTags() {
            this.$router.push(this.selectedTag);
            this.$store.dispatch('delOthersView', this.selectedTag).then(() => {
                this.moveToCurrentTag();
            })
        },
        moveToCurrentTag(){
            const tags = this.$refs.tag;
            this.$nextTick(() => {
                for (const tag of tags) {
                    if (tag.to.path === this.$route.path) {
                        this.$refs.scrollPane.moveToTarget(tag)
                        break
                    }
                }
            })
        }
    }
}
</script>

<style lang="less" scope>
    #tagView{
        height:34px;
        line-height: 34px;
        border-bottom: 1px solid #ae7777;
        position: relative;
    }
    .tags-view-item{
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;
    }
    .tags-view-item.active{
        background-color: #42b983;
        color: #fff;
        // border-color: #42b983;
    }
    .tags-view-item.active:before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
    }
    .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 3000;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
        li{
            margin: 0;
            padding: 0px 16px;
            cursor: pointer;
            border-bottom: 1px solid red;
        }
        li:last-child{
            border:0;
        }
        li:hover {
            background: #eee;
        }
    }

</style>