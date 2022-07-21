import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import newsSlice from "./newsSlice";
import jobSlice from "./jobSlice";

import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER  } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfigNews = {
    key: "news",
    version: 1,
    storage,
}

const persistConfigJob = {
    key: "job",
    version: 1,
    storage,
}

const persistConfigUser = {
    key: "user",
    version: 1,
    storage,
}

const userPersistReducer = persistReducer(persistConfigUser, userSlice);
const newsPersistReducer = persistReducer(persistConfigNews, newsSlice);
const jobPersistReducer = persistReducer(persistConfigJob, jobSlice);

export const store = configureStore({
    reducer: {
        user: userPersistReducer,
        news: newsPersistReducer,
        job: jobPersistReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }),
});

export const persistor = persistStore(store);