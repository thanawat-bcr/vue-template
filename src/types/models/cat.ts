export interface Status {
  verified: boolean
  sentCount: number
}
export interface Fact {
  createdAt: string
  deleted: boolean
  source: string
  status: Status
  text: string
  type: string
  updatedAt: string
  used: boolean
  user: string
  __v: number
  _id: string
}
