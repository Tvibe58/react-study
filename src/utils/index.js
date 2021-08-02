
import { config } from '../config/index'
export function getPathName () {
  const index = (config.baseName + window.location.origin).length
  const pathname = window.location.href.substring(index)
  return pathname
}