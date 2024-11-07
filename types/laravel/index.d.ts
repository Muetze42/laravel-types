export interface CursorPaginator {
  data: any[]
  next_cursor: string | null
  next_page_url: string | null
  path: string
  per_page: number
  prev_cursor: string | null
  prev_page_url: string | null
}

export interface PaginatorLink {
  active: boolean
  label: string
  url: string
}

export interface Paginator extends SimplePaginator {
  last_page: number
  last_page_url: string
  links: PaginatorLink[]
  total: number
}

export interface SimplePaginator {
  data: any[]
  first_page_url: string
  from: number
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
}

