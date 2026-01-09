import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type LucideIconName = keyof typeof LucideIcons

export function renderIcon(name: LucideIconName) {
  const Icon = LucideIcons[name] as LucideIcon | undefined
  return Icon ? <Icon /> : null
}
