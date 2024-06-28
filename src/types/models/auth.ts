export interface Token {
  refresh: string
  access: string
}
export interface TokenRefreshResponse {
  access: string
}
