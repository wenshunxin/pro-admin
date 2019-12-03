<template>
    <div>
        <BaseTable/>
        <TreeTable/>
        <EditTable/>
    </div>
</template>

<script>
import BaseTable from "./component/baseTable"
import TreeTable from "./component/treeTable"
import EditTable from "./component/editTable"
export default {
    name:"Table",
    components:{
        BaseTable,
        TreeTable,
        EditTable
    }
}
</script>

<style>

</style>