const getters = {
    componentId: state => state.layout.componentId,
    themeColor:state =>state.layout.themeColor,
    collapse:state=>state.layout.iscollapse,
    isDrawerOpen:state=>state.setting.isDrawerOpen,
    isShowFooter:state=>state.setting.isShowFooter,
    layoutColor:state=>state.setting.layoutColor,
    unread:state=>state.tabs.unread,
    read: state => state.tabs.read,
    recycle: state => state.tabs.recycle
}
export default getters
