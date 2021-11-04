export interface User {
    id: number,
    name:string ,
    age?: number, // opzionale con ?
    gender: string,
    city: string,
    birthday: number,
    bitcoins: number,
    payWithBitcoins?: (value: number) => void
  }