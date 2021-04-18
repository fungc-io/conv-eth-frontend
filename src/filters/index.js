
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
function currencyFormat(value){
    return Number(value).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits:2})
}
const filters = {
    'USD': function(value){
        return (value)?`US$${currencyFormat(value)}`:''
    },
    'CONV': function(value){
        return (value)?`${currencyFormat(value)} CONV`:''
    },
    'ETH': function(value){
        return (value)?`${currencyFormat(value)} ETH`:''
    },
    'fromNow': function(timestamp){
        return dayjs(timestamp*1000).fromNow()
    }
}
export default filters