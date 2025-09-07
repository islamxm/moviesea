export type Statuses = {
  isLoading?: boolean | string 
  isError?: boolean | string 
  isSuccess?: boolean | string 
}

export type StatusKeys = keyof Statuses