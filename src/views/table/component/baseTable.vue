<template>
    <div>
        <el-table 
            :data="tableData"
            border
            style="width:100%"
        >
            <el-table-column 
                prop="date" 
                label="日期" 
                width="180"
                sortable
                column-key="date"
                :filters="[
                    {text: '2016-05-01', value: '2016-05-01'}, 
                    {text: '2016-05-02', value: '2016-05-02'}, 
                    {text: '2016-05-03', value: '2016-05-03'}, 
                    {text: '2016-05-04', value: '2016-05-04'}
                ]"
                :filter-method="filterHandler"
            >
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
    name:"BaseTable",
    data(){
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods:{
        handleEdit(index,row){
            this.$message.success(`${index}---${row}`)
        },
        handleDelete(index,row){
            this.$message.success(`${index}---${row}`)
        },
        filterHandler(value, row, column){
            const property = column['property'];
            return row[property] === value;
        }
    }
}
</script>

<style>

</style>