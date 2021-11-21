import { unref, ComponentPublicInstance } from '@vue/composition-api'
import { MaybeRef } from '../utils/types'

export type VueInstance = ComponentPublicInstance
export type MaybeElementRef = MaybeRef<
  HTMLElement | SVGElement | VueInstance | undefined | null
>

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
export function unrefElement(
  elRef: MaybeElementRef
): HTMLElement | SVGElement | undefined {
  const plain = unref(elRef)
  return (plain as VueInstance)?.$el ?? plain
}
