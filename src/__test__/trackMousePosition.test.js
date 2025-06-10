import { trackMousePosition } from '../main'
import { describe, it, expect, beforeEach } from 'vitest'

describe('trackMousePosition', () => {
  beforeEach(() => {
    console.log = vi.fn()
  })

  it('should log mouse coordinates when mousemove event occurs', () => {
    trackMousePosition()

    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 200
    })

    document.dispatchEvent(mouseMoveEvent)

    expect(console.log).toHaveBeenCalledWith('Mouse X: 100, Mouse Y: 200')
  })
})