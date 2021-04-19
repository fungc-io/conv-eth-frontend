
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
function currencyFormat(value){
    if(isNaN(value)) return 0
    if (value>0 && value < 0.01) return "<0.01"
    if (value<0 && value > -0.01) return "> -0.01"
    return Number(value).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits:2})
}
const filters = {
    'USD': function(value){
        return (!isNaN(value))?`US$${currencyFormat(value)}`:'-'
    },
    'CONV': function(value){
        return (!isNaN(value))?`${currencyFormat(value)} CONV`:'-'
    },
    'ETH': function(value){
        return (!isNaN(value))?`${currencyFormat(value)} ETH`:'-'
    },
    'fromNow': function(timestamp){
        return dayjs(timestamp*1000).fromNow()
    }
}
export default filters