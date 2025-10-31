import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { DioAccount } from "./class/DioAccount"
import { NewAccount } from "./class/NewAccount";

const peopleAccount = new PeopleAccount(12345678900, "João Silva", 1)
console.log("=== Conta Pessoal ===")
peopleAccount.deposit(100)
peopleAccount.withdraw(30)
peopleAccount.getBalance()
peopleAccount.setName("João Pedro")
console.log("Nome atual:", peopleAccount.getName())

const companyAccount = new CompanyAccount("Tech Solutions LTDA", 2)
console.log("\n=== Conta Empresarial ===")
companyAccount.deposit(500)
companyAccount.getLoan(1000)
companyAccount.getBalance()
companyAccount.withdraw(200)

const newAccount = new NewAccount("Maria Souza", 3)
console.log("\n=== Nova Conta (com bônus de +10 no depósito) ===")
newAccount.deposit(100)
newAccount.getBalance()
newAccount.withdraw(50)
newAccount.getBalance()
