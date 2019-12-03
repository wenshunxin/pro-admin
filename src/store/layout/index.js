
const { themeColor,language,layoutColor } = JSON.parse(localStorage.getItem("store")) || {};

const state = {
    themeColor :themeColor || "#3DDD0C",
    iscollapse:true,
    language: language || 'zh',
    layoutColor:layoutColor || "#409EFF"
}

const mutations = {
    SET_THEME_COLOR(state,color){
        state.themeColor = color;
    },
    SET_COLLAPSE(state,collspse){
        state.iscollapse = collspse;
    },
    SET_LANGUAGE(state,language){
        state.language = language;
    },
    SEL_LAYOUTCOLOR(state,color){
        state.layoutColor = color;
    }
}
const actions = {
    handleSetColor({ commit },newColor){
        commit("SET_THEME_COLOR",newColor)
    },
    handleSetCollapse({commit},collspse){
        commit("SET_COLLAPSE",collspse)
    },
    handleSetLanguage({commit},language){
        commit("SET_LANGUAGE",language)
    },
    handleSetLayoutColor({commit},color){
        commit("SEL_LAYOUTCOLOR",color)
    }
    
}
export default {
  state,
  mutations,
  actions
}