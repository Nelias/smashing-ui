export type TabsAppearanceType = 'flat' | 'default' | 'outline'

export interface TabListProps {
  appearance?: TabsAppearanceType
  disabled?: boolean
}

export interface TabProps {
  appearance?: TabsAppearanceType
  isSelected?: boolean
  onClick: React.MouseEventHandler<HTMLLIElement>
}
