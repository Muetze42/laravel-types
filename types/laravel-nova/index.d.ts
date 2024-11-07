export type LaravelNovaId = string | number

export interface ActionResponseVisit {
  path: string
  options: { [key: string]: any } | null // todo?
}

export interface Badge {
  value: string
  typeClass: string
}

export interface Card extends Element {
  width: string
  height: string
}

export interface Dashboard extends Element {
  //
}

export interface Element {
  component: string
  onlyOnDetail: boolean
  prefixComponent: boolean
}

export interface Lens {
  name: string
  uriKey: string
}

export interface Tool {
  //
}

export interface IndexResource extends Resource {
  actions: Action[]
  previewHasFields: boolean
  authorizedToView: boolean
}

export interface IndexViewResource {
  label: string
  next_page_url: string | null
  per_page: number
  per_page_options: { [key: number]: number }
  polling: boolean
  pollingInterval: number
  prev_page_url: string | null
  resources: IndexResource[]
  showPollingToggle: boolean
  softDeletes: boolean
  sortable: boolean
  total: number
}

export interface DetailViewResource {
  title: string
  panels: Panel[]
  resource: Resource
}

export interface Panel extends Collapsable {
  attribute: string
  component: string
  fields: Field[]
  helpText: string | null
  limit: number | null
  name: string
  showToolbar: boolean
}

export interface Resource {
  authorizedToCreate: boolean
  authorizedToDelete: boolean
  authorizedToForceDelete: boolean
  authorizedToImpersonate: boolean
  authorizedToReplicate: boolean
  authorizedToRestore: boolean
  authorizedToUpdate: boolean
  fields: Field[]
  id: Field
  softDeleted: boolean
  softDeletes: boolean
  title: string
  actions?: Action[]
  previewHasFields?: boolean
  authorizedToView?: boolean
}

export interface URL {
  url: string
  remote: boolean
}
