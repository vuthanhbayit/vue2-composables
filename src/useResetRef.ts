import { Ref, ref } from '@vue/composition-api'
import { cloneDeep } from '@vt7/utils'

export type UseResetRef<T> = [Ref<T>, () => void]

export const useResetRef = <T>(defaultValue: T): UseResetRef<T> => {
  const state = ref<T>(cloneDeep(defaultValue)) as Ref<T>

  const reset = () => {
    state.value = cloneDeep(defaultValue)
  }

  return [state, reset]
}
