import {
  WatchCallback,
  WatchOptions,
  WatchSource,
  WatchStopHandle,
} from '@vue/composition-api'
import { isEqual } from '@vt7/utils/dist/is'
import { watchWithFilter } from '@vt7/vueuse/dist/shared/watchWithFilter'
import { MapOldSources, MapSources } from '@vt7/vueuse'

export function watchShallow<T extends Readonly<WatchSource<unknown>[]>, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle
export function watchShallow<T extends Readonly<WatchSource<unknown>[]>, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle
export function watchShallow<T extends Record<any, any>, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;
export function watchShallow<T, Immediate extends Readonly<boolean> = false>(sources: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle
export function watchShallow<Immediate extends Readonly<boolean> = false>(source: any, callback: any, options?: WatchOptions<Immediate>): WatchStopHandle {
  return watchWithFilter(source, (newValue, oldValue) => {
      if (isEqual(newValue, oldValue)) return

      callback(newValue, oldValue)
    },
    options
  )
}
