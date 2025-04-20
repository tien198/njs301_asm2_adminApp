enum BackendAdminUri {
    base = 'http://localhost:5000/',
    login = base + 'login/',
    signUp = base + 'sign-up/',
    admin = 'admin/',
    getUsersTotal = base + admin + 'get-users-total/',
    getTransactionsTotal = base + admin + 'get-transactions-total/',
    getRevenueTotal = base + admin + 'get-revenue-total/',
    getBalance = base + admin + 'get-balance/',
    lastTransactions = base + admin + 'last-transactions/',
}

export default BackendAdminUri