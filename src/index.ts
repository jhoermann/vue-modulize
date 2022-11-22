import type { Module } from './types/module'

export const modules: Module[] = []

export const registerModule = (module: Module) => {
  modules.push(module)
}
