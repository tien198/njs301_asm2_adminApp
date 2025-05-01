import ITransaction from "./ITransaction"

export default interface ILoader {
    usersTotal: Promise<any>,
    transactionsTotal: Promise<any>,
    revenueTotal: Promise<any>,
    balance: Promise<any>,
    lastTransactions: Promise<ITransaction[]>
}