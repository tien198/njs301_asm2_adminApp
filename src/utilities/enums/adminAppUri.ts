export enum AdminAppUri {
    base = '/',
    login = 'login',
    signup = 'sign-up',
    logout = 'logout',
    hotelsManagement = 'hotels-management',
    roomsManagement = 'rooms-management',
    addHotel = "add-hotel",
    addRoom = "add-room",
}

export enum AdminAppUri_Absolute {
    base = '/',
    login = base + 'authen/' + AdminAppUri.login,
    signup = base + 'authen/' + AdminAppUri.signup,
    logout = base + 'authen/' + AdminAppUri.logout,
    hotelsManagement = base + AdminAppUri.hotelsManagement,
    roomsManagement = base + AdminAppUri.roomsManagement,
    addHotel = base + AdminAppUri.addHotel,
    addRoom = base + AdminAppUri.addRoom,
}
