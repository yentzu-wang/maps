import faker from "faker"
import { Mappable } from "./CustomMap"

export class Company implements Mappable {
  commpanyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }
  color: string = "red"

  constructor() {
    this.commpanyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.commpanyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `
  }
}
