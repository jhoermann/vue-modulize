import { modules, registerModules } from '../'
import { moduleMock } from '../__mocks__/module.mock'

describe('modules', () => {
  it('should initialize with empty modules array', () => {
    expect(modules.length).toBe(0)
  })
})

describe('registerModule', () => {
  it('should add a module to the modules array', () => {
    registerModules([moduleMock])

    expect(modules[0]).toBe(moduleMock)
  })

  it('throws an exeption if a module is already registered', () => {
    expect(() => registerModules([moduleMock, moduleMock])).toThrowError('vue-modulize: Module already registered')
  })
})
