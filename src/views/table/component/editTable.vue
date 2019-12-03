<template>
    <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="日期">
            <template slot-scope="scope">
                <template v-if="scope.row.edit">
                    <el-date-picker  v-model="scope.row.date"  type="date" placeholder="选择日期"></el-date-picker>
                </template>
                <span v-else >{{scope.row.date}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名">
            <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="address" label="地址">
            <template slot-scope="scope">
                <template v-if="scope.row.edit">
                    <el-input class="edit-input" size="small" v-model="scope.row.address"></el-input>
                </template>
                <span v-else>{{ scope.row.address }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button v-if="scope.row.edit" type="success" @click="confirmEdit(scope.$index, scope.row)" size="small" icon="el-icon-share">保存</el-button>
                <el-button v-else type="primary" @click='scope.row.edit=!scope.row.edit' size="small" icon="el-icon-edit">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
 
<script>
import { setDate } from "@/utils/config"
  export default {
    data() {
      return {
        tableData: [{
            id:'1',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            edit:false
        }, {
            id:'2',
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            edit:false
        }, {
            id:'3',
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            edit:false
        }, {
            id:'4',
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            edit:false
        }]
      }
    },
    methods: {
        confirmEdit(index,row){
            row.edit = false;
            row['date'] = setDate(row['date'],"yyyy-MM-dd");
            this.$message({
                message: '该地址已经成功修改',
                type: 'success'
            })
        }
    }
  }
</script>