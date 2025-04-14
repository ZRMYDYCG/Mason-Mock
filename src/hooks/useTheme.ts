import { DEFAULT_PRIMARY } from '@/config'
import { useSettingStore } from '@/store/modules/setting.ts'
import { getDarkColor, getLightColor } from '@/utils/color'
import { storeToRefs } from 'pinia'

export const useTheme = () => {
  const settingStore = useSettingStore()
  const { isDark, systemThemeColor } = storeToRefs(settingStore)

  // 切换暗黑模式 ==> 同时修改主题颜色、侧边栏、头部颜色
  const switchDark = () => {
    const html = document.documentElement as HTMLElement
    if (isDark.value) html.setAttribute('class', 'dark')
    else html.setAttribute('class', '')
    changePrimary(systemThemeColor.value)
  }

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY
    }
    document.documentElement.style.setProperty('--el-color-primary', val)
    document.documentElement.style.setProperty(
      '--el-color-primary-dark-2',
      isDark.value ? `${getLightColor(val, 0.2)}` : `${getDarkColor(val, 0.3)}`
    )
    for (let i = 1; i <= 9; i++) {
      const primaryColor = isDark.value
        ? `${getDarkColor(val, i / 10)}`
        : `${getLightColor(val, i / 10)}`
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor)
    }

    settingStore.setElementTheme(val)
  }

  const initTheme = () => {
    switchDark()
    changePrimary(systemThemeColor.value)
  }

  return {
    switchDark,
    changePrimary,
    initTheme
  }
}
