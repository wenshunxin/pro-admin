const state = {
    unread:[
        {
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        }, {
            date: '2018-04-19 21:00:00',
            title: '今晚12点整发大红包，先到先得',
        }
    ],
    read:[
        {
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }
    ],
    recycle:[
        {
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }
    ]
};
const mutations = {
    SET_DATA(state,row){
        switch(row.type){
            case "unread":
                state.unread.splice(row.index, 1);
                state.read.push(row.data);
                break;
            case 'read':
                state.read.splice(row.index, 1);
                state.recycle.push(row.data);
                break;
            case "recycle":
                state.recycle.splice(row.index, 1);
                state.read.push(row.data);
                break;
        }
    },
    SET_ALL_DATA(state,type){
        switch(type){
            case "unread":
                state.read.push(...state.unread);
                state.unread = [];
                break;
            case "read":
                state.recycle.push(...state.read);
                state.read = [];
                break;
            case "recycle":
                state.recycle = [];
                break;
        }
    }
};
const actions = {
    handleSetData({commit},row){
        commit("SET_DATA",row)
    },
    handleSetAllData({commit},type){
        commit("SET_ALL_DATA", type);
    }
};

export default {
    state,
    mutations,
    actions
}