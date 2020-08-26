// 闰年每个月份的天数
const month_olypic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 非闰年每个月份的天数
const month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 初始化日历
function initCalendar (attendanceMonth) {
    return new Promise((resolve, reject) => {
        let [ year, month ] = attendanceMonth.split('-')
        // 当月一号的标准时间
        let tmpDate = new Date(attendanceMonth + '-01')
        // 判断是否闰年，当前月天数
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            this.calendarDays = this.getDateArr(month_olypic[month - 1], false)
        } else {
            this.calendarDays = this.getDateArr(month_normal[month - 1], false)
        }
        // 获取上月天数
        let preDays
        if (month * 1 > 1) { // 当前是否是一月
            preDays = this.getDateArr(month_olypic[month - 2], true)
        } else { // 上月为上年最后一月
            // 判断是否闰年，获取上月天数
            if (((year - 1) % 4 === 0 && (year - 1) % 100 !== 0) || ((year - 1) % 400 === 0)) {
                preDays = this.getDateArr(month_olypic[11], true)
            } else {
                preDays = this.getDateArr(month_normal[11], true)
            }
        }
        let weekDay = tmpDate.getDay() === 0 ? 7 : tmpDate.getDay()
        // 补充上月日历
        if (weekDay > 1) this.calendarDays = [...preDays.slice(1 - weekDay), ...this.calendarDays]
        // 补充下月日历
        if (this.calendarDays.length % 7 !== 0) this.calendarDays.push(...this.getDateArr(7, true).slice(0, 7 - this.calendarDays.length % 7))
        resolve()
    })
}
// 获取带有是否禁选时间数组，仅用于初始化日历函数（initCalendar）
function getDateArr (len, isdisabled) {
    return Array.from(Array(len), (v, k) => {
        return {
            disabled: isdisabled,
            isSelected: 0,
            isDiffSelected: 0,
            className: '',
            num: k + 1
        }
    })
}
export default initCalendar
