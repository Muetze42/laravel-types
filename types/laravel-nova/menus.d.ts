import { Badge } from './index'
import { Collapsable } from './nova-traits'

export interface Breadcrumb {
  name: string
  path: string
}

export interface Breadcrumbs {
  items: Breadcrumb[] // Todo: Collection
}

export interface Menu {
  items: Array<MenuGroup | MenuItem | MenuList> // Todo: Collection
}

export interface MenuGroup extends Collapsable {
  component: string
  items: Array<MenuGroup | MenuItem | MenuList> // Todo: Collection
  key: string
  name: string
}

export interface MenuItem {
  active: boolean
  badge: Badge | null
  component: string
  data: { [key: string]: string } | null
  external: boolean
  headers: { [key: string]: string } | null
  method: string
  name: string
  path: string
  target: string | null
}

export interface MenuList {
  component: string
  items: Array<MenuGroup | MenuItem | MenuList>
}

export interface MenuSection extends Collapsable {
  active: boolean
  badge: Badge | null
  component: string
  icon: string | null
  items: Array<MenuGroup | MenuItem | MenuList> // Todo: Collection
  key: string
  name: string
  path: string
}
