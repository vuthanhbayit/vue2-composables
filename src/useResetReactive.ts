import { reactive } from '@vue/composition-api'
import { cloneDeep } from '@vt7/utils'

export const useResetReactive = <T extends Record<string, any>>(
  defaultValue: T
) => {
  const state = reactive(cloneDeep(defaultValue))

  const reset = () => {
    Object.assign(state, defaultValue)
  }

  return { state, reset }
}
