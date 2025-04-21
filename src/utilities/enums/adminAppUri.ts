export enum AdminAppUri {
    base = '/',
    login = 'login',
    signup = 'sign-up',
    logout = 'logout'
}

export enum AdminAppUri_Absolute {
    base = '/',
    login = base + 'authen/' + AdminAppUri.login,
    signup = base + 'authen/' + AdminAppUri.signup,
    logout = base + 'authen/' + AdminAppUri.logout,
}
