export interface Metric extends Card {
  class: string
  name: string
  uriKey: string
  helpWidth: string
  helpText: string
  refreshWhenActionRuns: boolean
  refreshWhenFiltersChange: boolean
}

export interface MetricTableRowMetric extends Metric {
  icon: string
  iconClass: string
  title: string
  subtitle: string
  actions: any[] | null // Todo
}

export interface PartitionMetric extends Metric {
  //
}

export interface ProgressMetric extends Metric {
  //
}

export interface RangedMetric extends Metric {
  selectedRangeKey: string | null
  ranges: Range[]
}

export interface TrendMetric extends RangedMetric {
  //
}

export interface TrendResult extends RangedMetric {
  value: any
  trend: { [key: string]: string | number }
  prefix: string
  suffix: string
  suffixInflection: boolean
  format: string
}

export interface ValueMetric extends RangedMetric {
  //
}

interface Range {
  label: string
  value: any
}
