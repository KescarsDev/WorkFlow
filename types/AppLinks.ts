export interface SidebarLinksProps {
    href: string
    label: string
    icon: JSX.Element
}

export type GeneralNavLinksProps = Omit<SidebarLinksProps, 'icon'>

export type OverviewActivitiesCardProps = Omit<SidebarLinksProps, 'icon'> & {
    number: number
}
export interface PrestataireProps {
    value: string
    label: string
}
export interface FormSchemaProps {
    username: string
    motive: string
    contact: string
    date: Date
    Observation: string
}