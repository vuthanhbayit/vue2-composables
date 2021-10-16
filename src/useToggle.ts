import { ref } from '@vue/composition-api'

export const useToggle = (defaultValue = false) => {
  const visible = ref(defaultValue)

  const open = () => {
    visible.value = true
  }

  const close = () => {
    visible.value = false
  }

  const toggle = () => {
    visible.value = !visible.value
  }

  return { visible, open, close, toggle }
}
