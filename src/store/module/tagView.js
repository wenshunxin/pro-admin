const state = {
    visitedViews:[]
};
const mutations = {
    ADD_VISITED_VIEW(state,view){
        if(state.visitedViews.some(v => v.path === view.path)) return
        state.visitedViews.push(
            Object.assign({}, view, {
                title: view.meta.title || 'no-name'
            })
        )
    },
    DEL_VISITED_VIEW(state,view){
        for (const [i, v] of state.visitedViews.entries()) {
             if (v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
    },

    DEL_OTHER_VIEW(state,view){
        state.visitedViews = state.visitedViews.filter(v => {
            return v.meta.affix || v.path === view.path
        })
    },
    DEL_ALL_VIEW(state){
        const affixTags = state.visitedViews.filter(tag => tag.meta.affix);
        state.visitedViews = affixTags
    }
};

const actions = {
    // 添加标签
    addVisitedView({ commit }, view) {
        commit('ADD_VISITED_VIEW', view)
    },
    // 删除标签
    delVisitedView({commit,state},view){
        return  new Promise (resolve=>{
            commit("DEL_VISITED_VIEW",view)
            resolve({
                visitedViews:[...state.visitedViews]
            })
        })
    },
    // 关闭其他标签
    delOthersView({ commit },tag){
        commit("DEL_OTHER_VIEW",tag);
    },
    // 关闭所有标签
    delAllView({commit ,state}){
        return  new Promise(resolve=>{
            commit("DEL_ALL_VIEW");
            resolve({
                visitedViews:[...state.visitedViews]
            })
        })
    }
};

export default {
    state,
    mutations,
    actions
}