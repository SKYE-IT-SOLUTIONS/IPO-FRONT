import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import newsSlice from "./newsSlice";

import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER  } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const userPersistReducer = persistReducer(persistConfig, userSlice);
const newsPersistReducer = persistReducer(persistConfig, newsSlice);

export const store = configureStore({
    reducer: {
        user: userPersistReducer,
        news: newsPersistReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }),
});

export const persistor = persistStore(store);