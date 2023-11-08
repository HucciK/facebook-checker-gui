export interface AuthResponse {
    success:boolean
    data: {
        key:string,
        permissions: number,
        type: number,
        created_at: Date,
        active_at: Date,
        expire_at: Date,
        is_expired: boolean
    }
    error_message:string,
}