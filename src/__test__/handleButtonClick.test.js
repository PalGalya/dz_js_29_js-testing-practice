import { handleButtonClick } from '../main'
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('Тести handleButtonClick', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="testButton">Тестова Кнопка</button>
      <button id="secondButton">Друга Кнопка</button>
    `
    console.log = vi.fn()
  })

  it('має логувати повідомлення при кліку на кнопку', () => {
    const buttonId = 'testButton'
    const message = 'Кнопку натиснуто!'

    handleButtonClick(buttonId, message)
    document.getElementById(buttonId).click()

    expect(console.log).toHaveBeenCalledWith(message)
  })

  it('має працювати з різними повідомленнями', () => {
    const buttonId = 'secondButton'
    const message = 'Інше повідомлення'

    handleButtonClick(buttonId, message)
    document.getElementById(buttonId).click()

    expect(console.log).toHaveBeenCalledWith(message)
  })

  it('не має викликати помилку якщо кнопку не знайдено', () => {
    expect(() => {
      handleButtonClick('неіснуючаКнопка', 'тест')
    }).not.toThrow()
  })

  it('має коректно обробляти множинні кліки', () => {
    const buttonId = 'testButton'
    const message = 'Тест множинних кліків'

    handleButtonClick(buttonId, message)
    const button = document.getElementById(buttonId)

    button.click()
    button.click()
    button.click()

    expect(console.log).toHaveBeenCalledTimes(3)
    expect(console.log).toHaveBeenCalledWith(message)
  })

  it('має обробляти невалідні типи параметрів', () => {
    expect(() => handleButtonClick(null, 'test')).not.toThrow()
    expect(() => handleButtonClick(undefined, 'test')).not.toThrow()
    expect(() => handleButtonClick('testButton', null)).not.toThrow()
  })

  it('має обробляти порожні значення', () => {
    const buttonId = 'testButton'
    handleButtonClick(buttonId, '')
    document.getElementById(buttonId).click()
    expect(console.log).toHaveBeenCalledWith('')
  })

  afterEach(() => {
    vi.clearAllMocks()
    document.body.innerHTML = ''
  })
})
