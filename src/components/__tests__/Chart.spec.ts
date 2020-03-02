import { mount, createLocalVue } from '@vue/test-utils'
import Chart from '@/components/Chart.vue'
import { chartData, options } from '@/database/lineData'

const localVue = createLocalVue();
describe('Chart', () => {
  it('is a Propdata', () => {
    const wrapper = mount(Chart, {
      localVue,
      propsData: {
        data: {chartData}, 
        options: {options}
      }
    })
    // expect(wrapper.isVueInstance()).toBeTruthy()
  })
})