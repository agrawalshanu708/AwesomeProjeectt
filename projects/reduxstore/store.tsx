import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers'
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store