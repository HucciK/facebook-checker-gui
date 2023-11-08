export interface CheckerSettings {
    paths: CheckerPaths
    proxy_list: string[]
}

export interface CheckerPaths {
    path_to_check: string
    path_to_save: string
}

export interface InternalSettings {
    percent_per_spend: number
    theme: string
}