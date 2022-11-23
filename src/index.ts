import type { Module } from './types'

export const modules: Module[] = []

export const registerModules = (modulesToRegister: Module[]) => {
  for (const moduleToRegister of modulesToRegister) {
    if (modules.some(registeredModule => registeredModule.name === moduleToRegister.name)) {
      throw new Error('vue-modulize: module already registered')
    }

    modules.push(moduleToRegister)
  }
}

export const resetModules = () => modules.splice(0, modules.length)

export const useModules = (moduleNames: string[]): Record<string, Module> => Object.fromEntries(
  moduleNames.map(moduleName => {
    const module = modules.find(registeredModule => registeredModule.name === moduleName)
    
    if (!module) {
      throw new Error(`vue-modulize: module "${moduleName}" is not registered`)
    }
    
    return [moduleName, module]
  }),
)
