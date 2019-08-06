import storage from 'electron-json-storage'
import { promisify } from 'es6-promisify'
import { set } from 'lodash'

const storageGet = promisify(storage.get)
const storageSet = promisify(storage.set)

export const saveWindowSettings = async window => {
  if (!window) return
  const bounds = window.getContentBounds()
  const settings = await storageGet('settings')

  if (!settings) return

  set(settings, 'windowParams', bounds)

  return storageSet('settings', settings)
}

export const getWindowSettings = async () => {
  try {
    const settings = await storageGet('settings')
    return settings.windowParams || {}
  } catch (e) {
    console.log(e) // eslint-disable-line no-console
    return {}
  }
}
