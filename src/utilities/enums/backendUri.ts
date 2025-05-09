export enum BackendAdminUri {
    base = 'http://localhost:5000/',

    login = base + 'login/',
    signUp = base + 'sign-up/',

    admin = 'admin/',

    addHotel = base + admin + 'add-hotel/',
    addRoom = base + admin + 'add-room/',

    getUsersTotal = base + admin + 'get-users-total/',
    getTransactionsTotal = base + admin + 'get-transactions-total/',
    getRevenueTotal = base + admin + 'get-revenue-total/',
    getBalance = base + admin + 'get-balance/',
    lastTransactions = base + admin + 'last-transactions/',
    getHotelCount = base + admin + 'get-hotel-count/',

    getAdminHotels = base + admin + 'get-hotels/',
    getAdminRooms = base + admin + 'get-rooms/',
    getAdminTransactions = base + admin + 'get-transactions/',

    getTypeNamesList = base + 'get-type-names/',
    getRoomTitleList = base + admin + 'get-room-titles/',
    getHotelNamesList = base + admin + 'get-hotel-names/',

    deleteHotel = base + admin+ 'delete-hotel/',
    deleteRoom = base + admin+ 'delete-room/',
}
