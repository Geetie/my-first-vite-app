import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App.vue', () => {
  it('renders welcome message', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Hello TypeScript!')
  })

  it('emits update-message event', async () => {
    const wrapper = mount(App)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update-message')
  })
})