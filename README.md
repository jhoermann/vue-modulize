# vue-modulize
> Modularisation for Vue

- define which modules you want to use in your app
- use other modules and their exports 

## Usage
**Register the modules**
```ts
import exampleModule from 'modules/example-module' // Module definition for example module
import { registerModules } from 'vue-modulize'
registerModules([exampleModule])
```
Keep in mind that modules can't be registered twice.

**Use modules**
```ts
import { useModules } from 'vue-modulize'
useModules(['module-name'])
```
Only registered modules can be used.

## Module definitions
Module definitions should define the name of the module and which parts of the module should be accessible for other modules.  
If you are using TypeScript a module definition interface could look like this:  
```ts
interface Module {
  name: string
  exports: any // Exported parts of the module can be anything: Types, routes, Components etc.
}
```

## License

Unless otherwise noted, all source code is licensed under the MIT License.  
Copyright (c) 2022 Jochen Hörmann
