import { modules, registerModules, resetModules, useModules } from '../'
import { moduleMock } from '../__mocks__/module.mock'

describe('vue-modulize', () => {
  beforeEach(() => {
    resetModules()
  })

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

    it('should throw an exeption if a module is already registered', () => {
      expect(() => registerModules([moduleMock, moduleMock])).toThrowError('vue-modulize: module already registered')
    })
  })

  describe('resetModules', () => {
    it('should remove all modules', () => {
      registerModules([moduleMock])

      resetModules()

      expect(modules).toHaveLength(0)
    })
  })

  describe('useModules', () => {
    it('returns modules to be used', () => {
      registerModules([moduleMock])

      expect(useModules(['mock-module'])).toStrictEqual({
        'mock-module': moduleMock,
      })
    })

    it('should throw an exception if a non registered module should be used', () => {
      expect(() => useModules(['mock-module'])).toThrowError('vue-modulize: module "mock-module" is not registered')
    })
  })
})
