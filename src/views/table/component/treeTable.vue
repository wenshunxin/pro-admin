<template>
    <div style="margin:30px 0;">
        <el-table
            :data="tableData"
            style="width:100%"
            row-key="id"
            border
            lazy
            :default-expand-all="false"
            :tree-prop="{children:'children',hasChildren:'hasChildren'}"
        >   
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="date" label="日期" sortable width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" ></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name:"TreeTable",
    data(){
        return {
            tableData: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                children: [{
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }]
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods:{
         handleEdit(index,row){
            console.log(index,row);
        },
        handleDelete(index,row){
            console.log(index,row);
        }
    }
}
</script>

<style>

</style>