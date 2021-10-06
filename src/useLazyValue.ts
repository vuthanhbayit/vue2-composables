import {
  computed,
  getCurrentInstance,
  Ref,
  ref,
  watch,
} from '@vue/composition-api'
import { debounce } from '@vt7/utils'

export const useLazyValue = <T>(modelValue: Ref<T>, wait = 0) => {
  const vm = getCurrentInstance()

  const lazyValue = ref<T>()
  const internalValue = computed<T>({
    get() {
      return lazyValue.value as T
    },
    set: debounce(wait, val => {
      lazyValue.value = val

      vm?.emit('input', lazyValue.value)
      vm?.emit('change', lazyValue.value)
    }),
  })

  watch(
    modelValue,
    value => {
      lazyValue.value = value
    },
    { immediate: true, deep: true }
  )

  return { lazyValue, internalValue }
}
