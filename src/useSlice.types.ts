import type { Slice as ToolkitSlice } from '@reduxjs/toolkit'
import type { BoundSelectors } from './utils'

export type Slice = Omit<ToolkitSlice, 'selectors'> & {
  selectors: Record<string, (state: any, ...params: any[]) => any>
}

export type SliceState<T extends Slice> = ReturnType<T['selectSlice']>
export type SliceActions<T extends Slice> = T['actions']
export type SliceSelectors<T extends Slice> = T['selectors']
export type SliceName<T extends Slice> = T['name']

export type UseSliceReturn<T extends Slice> = [
  state: SliceState<T>,
  actions: SliceActions<T>,
  selectors: BoundSelectors<SliceSelectors<T>>
]
