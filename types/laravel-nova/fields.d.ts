import { LaravelNovaId } from './index'
import { Collapsable } from './nova-traits'

export interface Field {
  attribute: string
  compact: boolean
  component: string
  dependentComponentKey: string
  dependentShouldEmitChangesEvent: boolean
  dependsOn: null | { [key: string]: string | number } // todo?
  displayedAs: string | null
  fullWidth: boolean
  helpText: string | null
  indexName: string
  inline: boolean
  name: string
  nullable: boolean
  panel: string | null
  placeholder: string | null
  prefixComponent: boolean
  readonly: boolean
  required: boolean
  sortable: boolean
  sortableUriKey: string
  stacked: boolean
  textAlign : string
  uniqueKey: string
  usesCustomizedDisplay: boolean
  validationKey: string
  value: any
  visible: boolean
  withLabel: boolean
  wrapping: boolean
}

export interface AudioField extends FileField {
  preload: string | null
}

export interface AvatarField extends ImageField {
  //
}

export interface BadgeField extends Field {
  label: string
  typeClass: string
  icon: string | null
}

export interface BelongsToField extends Field {
  belongsToId: LaravelNovaId | null
  belongsToRelationship: string
  debounce: number
  displaysWithTrashed: boolean
  hasFieldsToPeekAt: boolean
  label: string
  peekable: boolean | null
  relationshipType: string
  resourceName: string
  reverse: boolean
  searchable: boolean
  showCreateRelationButton: boolean
  singularLabel: string
  viewable: boolean
  withSubtitles: boolean
}

export interface BelongsToManyField extends Field, Paginateable {
  belongsToManyRelationship: string
  debounce: number
  searchable: boolean
  showCreateRelationButton: boolean
  validationKey: string
  withSubtitles: boolean
}

export interface BooleanField extends Field {
  //
}

export interface BooleanGroupField extends Field {
  hideFalseValues: boolean
  hideTrueValues: boolean
  noValueText: string
  options: any[]
}

export interface CodeField extends Field {
  height: string | number
}

export interface ColorField extends Field {
  suggestions: any[] | null // todo?
}

export interface CountryField extends Field {
  //
}

export interface CurrencyField extends Field {
  currency: null
}

export interface DateField extends Field {
  min: string | null
  max: string | null
  step: string | number | null
}

export interface DateTimeField extends Field {
  originalValue: string
  min?: string | null
  max?: string | null
  step?: string | number | null
}

export interface EmailField extends Field {
  //
}

export interface FileField extends Field, FileAttributes {
  //
}

export interface GravatarField extends AvatarField {
  indexName: ''
}

export interface HasManyField extends Field, Paginateable {
  hasManyRelationship: string
}

export interface HasManyThroughField extends HasManyField {
  hasManyThroughRelationship: string
}

export interface HasOne extends Field {
  resourceName: string
  hasOneRelationship: string
  relationshipType: string
  relationId: LaravelNovaId
  hasOneId: LaravelNovaId | null
  relatable: true
  singularLabel: string
  alreadyFilled: boolean
  authorizedToView: boolean
  authorizedToCreate: boolean
  createButtonLabel: string
  from: HasOneFrom
}

export interface HasOneThrough extends Field {
  alreadyFilled: boolean
  authorizedToView: boolean
  hasOneThroughId: LaravelNovaId | null
  hasOneThroughRelationship: string
  relatable: true
  relationId: LaravelNovaId
  relationshipType: string
  resourceName: string
  singularLabel: string
}

export interface HeadingField extends Field {
  //
}

export interface HiddenField extends Field {
  //
}

export interface IDField extends Field {
  pivotValue: any | null
}

export interface ImageField extends FileField, ImageAttributes {
  //
}

export interface KeyValueField extends Field {
  keyLabel: string
  valueLabel: string
  actionText: string
  readonlyKeys: boolean
  canAddRow: boolean
  canDeleteRow: boolean
}

export interface LineField extends TextField {
  classes: { [key: string]: string } // todo?
}

export interface MarkdownField extends Field {
  preset: string
  previewFor: string
  shouldShow: boolean
  withFiles: boolean
}

export interface MorphedByManyField extends MorphToManyField {
  //
}

export interface MorphManyField extends HasManyField {
  //
}

export interface MorphOneField extends HasOneField {
  //
}
export interface MorphToField extends HasOneField {
  debounce: number
  morphToRelationship: string
  relationshipType: string
  morphToType: string
  peekable: boolean
  hasFieldsToPeekAt: boolean
  resourceLabel: string | null
  resourceName: string
  reverse: boolean
  searchable: boolean
  withSubtitles: boolean
  showCreateRelationButton: boolean
  displaysWithTrashed: boolean
  viewable: boolean
  defaultResource: string | null
}

export interface MorphToActionTargetField extends MorphToField {
  //
}

export interface MorphToManyField extends Field, Paginateable {
  debounce: number
  morphToManyRelationship: string
  searchable: boolean
  showCreateRelationButton: boolean
  withSubtitles: boolean
}

export interface MultiSelectField extends Field {
  options: any[] // todo?
}

export interface NumberField extends TextField {
  min?: string | number
  max?: string | number
  step?: string | number
}

export interface PasswordField extends Field {
  value: ''
}

export interface PasswordConfirmationField extends PasswordField {
  //
}

export interface RepeaterField extends Field {
  repeatables: boolean
  sortable: any[] // todo?
}

export interface SelectField extends Field {
  options: any[] // todo?
  searchable: boolean
}

export interface SlugField extends Field {
  from: string
  separator: string
  showCustomizeButton: boolean
  updating: boolean
}

export interface SparklineField extends Field {
  chartStyle: string
  data: any | any[] // todo?
}

export interface StackField extends Field {
  lines: any[] // todo?
}

export interface StatusField extends Field {
  type: string
  typeClass: string
}

export interface TagField extends Field {
  belongsToManyRelationship: string
  preload: boolean
  resourceName: string
  showCreateRelationButton: boolean
  singularLabel: string
  style: string
  validationKey: { [key: string]: string } // todo?
  withPreview: boolean
  withSubtitles: boolean
}

export interface TextField extends Field {
  suggestions?: any[] | null // todo?
  asHtml: boolean
  copyable: boolean
}

export interface TextareaField extends Field {
  rows: number
  shouldShow: boolean
}

export interface TimezoneField extends SelectField {
  //
}

export interface TrixField extends Field {
  shouldShow: boolean
  withFiles: boolean
}

export interface UiAvatarField extends AvatarField {
  indexName: ''
}

export interface URLField extends TextField {
  //
}

export interface VaporAudioField extends VaporFileField {
  preload: string
}

export interface VaporFileField extends Field, FileAttributes {
  //
}

export interface VaporImageField extends VaporFileField, ImageAttributes {
  //
}

interface FileAttributes {
  acceptedTypes: string
  deletable: boolean
  downloadable: boolean
  previewUrl: string | null
  thumbnailUrl: string | null
}

interface HasOneFrom {
  viaRelationship?: string | null
  viaResource?: string | null
  viaResourceId?: string | number | null
}

interface ImageAttributes {
  aspect: boolean
  detailWidth: number
  indexWidth: number
  maxWidth: number | null
  rounded: boolean
}

interface Paginateable extends Collapsable {
  perPage: number
  relatable: true
  relationshipType: string
  resourceName: string
  singularLabel: string
}
