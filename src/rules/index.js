import { ALL_REGIONS } from './Constants'
import zonaArancione from './zonaArancione'
import zonaGialla from './zonaGialla'
import zonaRossa from './zonaRossa'

const allRules = [
  ...zonaGialla,
  ...zonaArancione,
  ...zonaRossa,
]

export function getActiveRules(selectedProvince) {
  const now = Date.now()
  return allRules
    .filter(rule => !rule.to || new Date(rule.to) > now)
    .filter(rule => rule.regions === ALL_REGIONS || rule.regions.includes(selectedProvince.regione))
    .sort((first, second) => new Date(first.from) - new Date(second.from))
}
