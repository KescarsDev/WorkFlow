
export interface SidebarItem {
    href: string
    label: string
}
export interface SidebarLinksProps {
    href: string
    label: string
    icon: JSX.Element
    hrefNew?: string
}

export type GeneralNavLinksProps = Omit<SidebarLinksProps, 'icon'>

export type OverviewActivitiesCardProps = Omit<SidebarLinksProps, 'icon'> & {
    number: number
}