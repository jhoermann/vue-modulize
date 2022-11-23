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

export const useModules = (moduleNames: string[]): Record<string, Module> => {
  moduleNames.forEach(moduleName => {
    if (!modules.some(registeredModule => registeredModule.name === moduleName)) {
      throw new Error(`vue-modulize: module "${moduleName}" is not registered`)
    }
  })

  return modules
    .filter(registeredModule => moduleNames.some(moduleName => moduleName === registeredModule.name))
    .reduce((previous, current) => ({ ...previous, [current.name]: current }), {})
}
