import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, validateStatus: void){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    // se conta com status true
    if (this.validateStatus())
    {

        this.balance += loanValue

    }
  }
}
