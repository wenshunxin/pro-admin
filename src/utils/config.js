export const setDate = (time, format)=>{
    const fmt = format || 'yyyy-MM-dd';
    if (/-/g.test(time)) {
        time = time.replace(new RegExp(/-/gm), "/");
    }
    Date.prototype.pattern = function (fmt) {
        let date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        //获取年
        if (/(y+)/i.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        //获取月、日、时、分、秒
        for (let k in date) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return fmt;
    };
    return new Date(time).pattern(fmt);
}