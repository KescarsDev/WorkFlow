export interface SidebarLinksProps {
    href: string
    label: string
    icon: JSX.Element
}

export type GeneralNavLinksProps = Omit<SidebarLinksProps, 'icon'>

export type OverviewActivitiesCardProps = Omit<SidebarLinksProps, 'icon'> & {
    number: number
}
export interface ProvidersProps {
    label: string
}
