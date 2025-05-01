export enum AdminAppUri {
    base = '/',
    authen = 'authen/',
    login = 'login',
    signup = 'sign-up',
    logout = 'logout',
    hotelsManagement = 'hotels-management',
    roomsManagement = 'rooms-management',
    transManagement = 'transactions-management',
    addHotel = "add-hotel",
    addRoom = "add-room",
}

export enum AdminAppUri_Absolute {
    base = '/',
    login = base + AdminAppUri.authen + AdminAppUri.login,
    signup = base + AdminAppUri.authen + AdminAppUri.signup,
    logout = base + AdminAppUri.authen + AdminAppUri.logout,
    hotelsManagement = base + AdminAppUri.hotelsManagement,
    roomsManagement = base + AdminAppUri.roomsManagement,
    transManagement = base + AdminAppUri.transManagement,
    addHotel = base + AdminAppUri.addHotel,
    addRoom = base + AdminAppUri.addRoom,
}
