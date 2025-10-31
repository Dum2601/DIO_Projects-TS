import { DioAccount } from "./DioAccount";

class NewAccount extends DioAccount
{

    deposit = (depositValue: number): void => {
        if(this.validateStatus()){
            
            if (depositValue > 0)
            {

            
            this.balance += (depositValue + 10)
            console.log(`O valor de ${depositValue} foi depositado na conta!`)

            } else {

            console.log('Informe um valor válido para o depósito!')

            }

        }
    }

}