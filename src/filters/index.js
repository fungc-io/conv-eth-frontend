
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
function currencyFormat(value){
    if (value>0 && value < 0.01) return "<0.01"
    return Number(value).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits:2})
}
const filters = {
    'USD': function(value){
        return (value)?`US$${currencyFormat(value)}`:'0'
    },
    'CONV': function(value){
        return (value)?`${currencyFormat(value)} CONV`:'0'
    },
    'ETH': function(value){
        return (value)?`${currencyFormat(value)} ETH`:'0'
    },
    'fromNow': function(timestamp){
        return dayjs(timestamp*1000).fromNow()
    }
}
export default filters