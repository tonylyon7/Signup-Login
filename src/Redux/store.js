import { legacy_createStore as createstore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {createLogger} from 'redux-logger'
import { rootReducer } from "./Reducers/rootReducer";
const logger = createLogger()


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userLogin"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

const configStore = () => {
    return createstore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middleware, logger))
    )
}


export default configStore