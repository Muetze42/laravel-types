export interface Action {
  authorizedToRun: boolean
  cancelButtonText: string
  component: string
  confirmButtonText: string
  destructive: boolean
  fields: Field[]
  modalSize: string
  modalStyle: string
  name: string
  responseType: string
  showOnDetail: boolean
  showOnIndex: boolean
  showOnTableRow: boolean
  standalone: boolean
  uriKey: string
  withoutConfirmation: boolean
}

export interface ActionResponse {
  danger: string
  deleted: boolean
  download: string
  message: string
  modal: string
  name: string
  openInNewTab: string
  redirect: string
  visit: ActionResponseVisit
}
