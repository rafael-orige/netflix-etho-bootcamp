import { PayloadAction } from "@reduxjs/toolkit"

const authenticated = (state: { authenticated: boolean }, action: PayloadAction<boolean>) => {
    state.authenticated = action.payload
}

const reducers = {
    authenticated
}

export default reducers