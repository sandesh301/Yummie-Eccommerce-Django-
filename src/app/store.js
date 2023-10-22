import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthAPi } from '../services/userAuthAPi/'

export const store = configureStore({
    reducer: {
        [userAuthAPi.reducerPath]: userAuthAPi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthAPi.middleware),
})
setupListeners(store.dispatch)