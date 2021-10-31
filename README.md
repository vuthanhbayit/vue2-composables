# @vt7/vue2-composables

## Getting started

```
yarn add @vt7/vue2-composables
```

## Basic Usage

In `main.vue`

```js
import { useToggle } from '@vt7/vue2-composables'

export default defineComponent({
  setup() {
    const { visible, toggle } = useToggle()
    
    return { visible, toggle }
  }
})
```
