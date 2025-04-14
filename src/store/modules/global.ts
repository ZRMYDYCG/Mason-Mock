import { defineStore } from 'pinia'
import { GlobalState } from '@/store/interface'
import piniaPersistConfig from '@/store/helper/persist'
import { DEFAULT_PRIMARY } from '@/config'

export const useGlobalStore = defineStore({
  id: 'global',
  state: (): GlobalState => ({
    isCollapse: false,
    isDark: false,
    breadcrumb: true,
    primary: DEFAULT_PRIMARY
  }),
  getters: {},
  actions: {
    setCollapseState(state: boolean) {
      this.isCollapse = state
    },
    setBreadcrumbState(state: boolean) {
      this.breadcrumb = state
    }
  },
  persist: piniaPersistConfig('global')
})
