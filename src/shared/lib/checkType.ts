type JSType = 'bigint' | 'boolean' | 'string' | 'number' | 'function' | 'object' | 'symbol' | 'undefined' 
export const checkType = (value: any, type: JSType) => {
  if(typeof value === type) {
    return true
  }
  return false
}