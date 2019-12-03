<template>
    <div style="padding:20px;">
        <el-row :gutter="24">
            <el-col :span="6">
                <div class="grid-content">
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>Simple</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <draggable
                            :list="list1"
                            :group="{ name: 'people', pull: 'clone', put: false }"
                        >
                            <div 
                                class="list-group-item"
                                v-for="(element) in list1"
                                :key="element.name"
                            >{{element.name}}</div>
                        </draggable>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>Simple</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                         <draggable
                            :list="list2"
                            group="people"
                        >
                            <div 
                                class="list-group-item"
                                v-for="(element,index) in list2"
                                :key="element.name+index"
                            >{{element.name}}</div>
                        </draggable>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <rawDisplayer class="col-3" :value="list1" title="List1" />
            </el-col>
            <el-col :span="6">
                <rawDisplayer class="col-3" :value="list2" title="List2" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name:"Two-Lists",
    components:{
        draggable
    },
    data(){
        return {
            list1:[
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 }
            ],
            list2:[
                { name: "Juan", id: 5 },
                { name: "Edgard", id: 6 },
                { name: "Johnson", id: 7 }
            ]
        }
    }
}
</script>

<style>

</style>