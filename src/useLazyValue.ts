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

  // @ts-expect-error mis-alignment with @vue/composition-api
  const _emit = vm?.emit || vm?.$emit?.bind(vm)

  const lazyValue = ref<T>()
  const internalValue = computed<T>({
    get() {
      return lazyValue.value as T
    },
    set: debounce(wait, val => {
      lazyValue.value = val

      _emit('input', lazyValue.value)
      _emit('change', lazyValue.value)
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
