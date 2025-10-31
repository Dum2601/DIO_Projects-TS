export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber

  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      
      if (depositValue > 0)
      {

        this.balance += depositValue
        console.log(`O valor de ${depositValue} foi depositado na conta!`)

      } else {

        console.log('Informe um valor válido para o depósito!')

      }

    }
  }

  withdraw = (withdrawValue: number): void => {
    if (this.validateStatus()) {
      if (withdrawValue > 0 && withdrawValue <= this.balance) {
        this.balance -= withdrawValue
        console.log(`Saque de ${withdrawValue} realizado com sucesso!`)
      } else {
        console.log('Saldo insuficiente ou valor inválido para saque.')
      }
    }
  }


  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
