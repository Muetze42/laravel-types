export interface Filter {
  class: string
  component: string
  currentValue: any
  name: string
  options: { [key: string]: string | number | boolean } //
}

export interface BooleanFilter extends Filter {
  //
}

export interface DateFilter extends Filter {
  //
}

export interface RangeFilter extends Filter {
  //
}
