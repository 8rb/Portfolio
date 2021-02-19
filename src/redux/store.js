import { createStore,applyMiddleware  } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage'

import rootReducer from './themeReducer'

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
    blacklist: ['loading'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer) 

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    applyMiddleware() // add any middlewares here
)

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export {store, persistor}