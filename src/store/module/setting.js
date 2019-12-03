const state = {
    // false 关闭 true  展开
    isDrawerOpen:false ,
    isShowFooter:true
};

const mutations = {
    SET_OPEN_DRAWER(state,drawer){
        state.isDrawerOpen = drawer;
    },
    SET_SHOW_FOOTER(state,footer){
        state.isShowFooter = footer;
    }
};

const actions = {
    handleOpenDrawer({commit},drawer){
        commit("SET_OPEN_DRAWER",drawer)
    },
    handleShowFooter({commit},footer){
        commit("SET_SHOW_FOOTER",footer)
    }
}
export default {
    state,
    mutations,
    actions
}