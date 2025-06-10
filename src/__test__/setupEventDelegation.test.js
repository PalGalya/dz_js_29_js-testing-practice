import { setupEventDelegation } from '../main'
import { describe, it, expect, beforeEach } from 'vitest'

describe('setupEventDelegation', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="testList">
        <li>Item 1</li>
        <li>  Item 2  </li>
        <li>Item 3</li>
      </ul>
    `
    console.log = vi.fn()
  })

  it('should log clicked item text when li element is clicked', () => {
    setupEventDelegation('#testList')

    const secondItem = document.querySelectorAll('li')[1]
    secondItem.click()

    expect(console.log).toHaveBeenCalledWith('Item clicked: Item 2')
  })

  it('should not log when clicking on the ul element itself', () => {
    setupEventDelegation('#testList')

    document.getElementById('testList').click()

    expect(console.log).not.toHaveBeenCalled()
  })
})
