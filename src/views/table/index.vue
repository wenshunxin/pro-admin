<template>
    <div>
        <BaseTable/>
        <TreeTable/>
        <TreeTable1/>
        <EditTable/>
    </div>
</template>

<script>
import BaseTable from "./component/baseTable"
import TreeTable from "./component/treeTable"
import EditTable from "./component/editTable"
import TreeTable1 from "./component/treeTable1"
export default {
    name:"Table",
    components:{
        BaseTable,
        TreeTable,
        EditTable,
        TreeTable1
    }
}
</script>

<style>

</style>