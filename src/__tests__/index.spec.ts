import { modules, registerModule } from '../'
import { moduleMock } from '../__mocks__/module.mock'

describe('modules', () => {
  it('should initialize with empty modules array', () => {
    expect(modules.length).toBe(0)
  })
})

describe('registerModule', () => {
  it('should add a module to the modules array', () => {
    registerModule(moduleMock)

    expect(modules[0]).toBe(moduleMock)
  })
})
