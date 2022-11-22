import type { Module } from './types'

export const modules: Module[] = []

export const registerModules = (modulesToRegister: Module[]) => {
  for (const moduleToRegister of modulesToRegister) {
    if (modules.some(registeredModule => registeredModule.name === moduleToRegister.name)) {
      throw new Error('vue-modulize: Module already registered')
    }

    modules.push(moduleToRegister)
  }
}
