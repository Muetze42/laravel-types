import { Filter } from './index'
import { Field } from './fields'
import { Filter as BaseFilter } from './filters'

export interface Filter extends BaseFilter {
  field: Field[]
}

export interface BooleanFilter extends Filter {
  //
}
export interface BooleanGroupFilter extends Filter {
  //
}

export interface DateFilter extends Filter {
  //
}

export interface DateTimeFilter extends Filter {
  //
}

export interface EloquentFilter extends Filter {
  //
}

export interface MorphToFilter extends Filter {
  //
}

export interface MultiSelectFilter extends Filter {
  //
}

export interface NumberFilter extends Filter {
  //
}

export interface SelectFilter extends Filter {
  //
}

export interface StatusFilter extends Filter {
  field: Field[]
}

export interface TextFilter extends Filter {
  //
}
