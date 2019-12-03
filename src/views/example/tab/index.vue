<template>
    <el-card shadow="never">
        <el-tabs v-model="activeName">
            <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
                <el-table :data="unread" :show-header="false" style="width: 100%" tooltip-effect>
                    <el-table-column show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span class="message-title">{{scope.row.title}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" width="180"></el-table-column>
                    <el-table-column width="120">
                        <template slot-scope="scope">
                            <el-button size="small" @click="$store.dispatch('handleSetData',{data:scope.row,type:'unread',index:scope.$index})">标为已读</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="handle-row">
                    <el-button type="primary" size="small" :disabled="unread.length>0?false:true"
                         @click="$store.dispatch('handleSetAllData','unread')"
                    >全部标为已读</el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane :label="`已读消息(${read.length})`" name="second">
                <el-table :data="read" :show-header="false" style="width: 100%">
                    <el-table-column show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span class="message-title">{{scope.row.title}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" width="180"></el-table-column>
                    <el-table-column width="120">
                        <template slot-scope="scope">
                            <el-button size="small" type="danger" @click="$store.dispatch('handleSetData',{data:scope.row,type:'read',index:scope.$index})">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="handle-row">
                    <el-button type="primary" size="small" :disabled="read.length>0?false:true"
                        @click="$store.dispatch('handleSetAllData','read')"
                    >全部删除</el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
                <el-table :data="recycle" :show-header="false" style="width: 100%">
                    <el-table-column show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span class="message-title">{{scope.row.title}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" width="180"></el-table-column>
                    <el-table-column width="120">
                        <template slot-scope="scope">
                            <el-button size="small" type="danger" @click="$store.dispatch('handleSetData',{data:scope.row,type:'recycle',index:scope.$index})">还原</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="handle-row">
                    <el-button type="primary" 
                        size="small" 
                        :disabled="recycle.length>0?false:true" 
                        @click="$store.dispatch('handleSetAllData','recycle')">清空回收站</el-button>
                </div>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:"Tab",
    data(){
        return {
            activeName: 'first'
        }
    },
    computed:{
        ...mapGetters({
            unread:"unread",
            read:"read",
            recycle:"recycle"
        })
    }
}
</script>

<style lang="less" scope>
    .handle-row{
        margin-top:30px;
    }
    .message-title {
        color: #20a0ff;
        cursor: pointer;
    }
</style>