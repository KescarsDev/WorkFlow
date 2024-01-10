export interface CallFormFieldsType {
    username: string
    motive: string
    contact: string
    date: Date
    observation: string
    provider: string
}

export interface VisitFormFieldsType extends CallFormFieldsType {}

export interface InvoicingFormFieldsType {
    provider: string
    date: Date
    rising: number
    billNumber: string
}

export interface MailFormFieldsType {
    provider: string
    sender: string
    mailNumber: string
    date: Date
    recipient: string
    wording: string
    observation: string
}

export interface FormTypes {
    control?: any
    onSubmit: any
    errors: any
    isLoading: boolean
    register: any
    handleSubmit: any
}