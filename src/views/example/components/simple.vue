<template>
    <div style="padding:50px;">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-button type="primary" @click="handleAdd">Add</el-button>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>Simple</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <draggable
                            :list="list"
                        >
                            <div 
                                class="list-group-item"
                                v-for="element in list"
                                :key="element.name"
                            >
                                {{element.name}}
                            </div>
                        </draggable>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <rawDisplayer class="col-3" :value="list" title="List" />
                </div>
            </el-col>
        </el-row>

        <el-transfer v-model="value" :data="data"></el-transfer>

    </div>
</template>

<script>
import draggable from "vuedraggable";
let id=1;
export default {
    name:"Simple",
    components:{
        draggable,
    },
    data(){
        return {
            list:[
                {name:"John",id:0},
                {name:"Joao",id:1},
                {name:"Jean",id:2}
            ],
            data:[],
            value: [1, 4]
        }
    },
    mounted(){
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };
        this.data = generateData();
    },
    methods:{
        handleAdd(){
            this.list.push({ name: "Juan " + id, id: id++ });
        }
    }
}
</script>

<style>
    @import "./draggable.css";
</style>