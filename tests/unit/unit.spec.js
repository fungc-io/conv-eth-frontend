import { shallowMount } from '@vue/test-utils'
import PooledWidget from '@/components/Pooled/PooledWidget.vue'
import filters from '@/filters/'

describe('PooledWidget.vue', () => {
  it('renders props.title and slots when passed', () => {
    const title = 'new message'
    const amount = "$10000"
    const wrapper = shallowMount(PooledWidget, {
      propsData: { title },
      slots: {
        default: amount
      }
    })
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(amount)
  })
})
describe('filters',()=>{
  it("Format USD",()=>{
    expect(filters.USD(10000)).toBe("US$10,000")
  })
  it("Format CONV",()=>{
    expect(filters.CONV(10000)).toBe("10,000 CONV")
  })
  it("Format ETH",()=>{
    expect(filters.ETH(123)).toBe("123 ETH")
  })
  it("Format small currency amount",()=>{
    expect(filters.ETH(0.0001)).toBe("<0.01 ETH")
  })
  it("Format currency non-numbers amount",()=>{
    expect(filters.ETH("hello")).toBe("-")
  })
  it("Format currency negative amount",()=>{
    expect(filters.ETH(-10)).toBe("-10 ETH")
  })
  it("Format currency 0 amount",()=>{
    expect(filters.ETH(0)).toBe("0 ETH")
  })
  it("Check showing time from now as human readable format", ()=>{
    let timestamp = Math.floor(Date.now()/1000)
    expect(filters.fromNow(timestamp)).toBe("a few seconds ago")
  })
})
