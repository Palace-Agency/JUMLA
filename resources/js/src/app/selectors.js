export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectIsVerified = (state) => state.user.user?.email_verified_at;
