export interface FacebookResult {
    type:string
    data:FacebookAccount
}

export interface FacebookAccount{
    id:string
    token:string
    cookies_path:string
    stats:FacebookStats
}


export interface FacebookStats {
    account_status:number
    currency:string
    balance:string
    account_currency_ratio_to_usd:number
    amount_spent:string
    spend_cap:string
    is_user_allowed_to_advertise:boolean
    timezone_name:string
}

