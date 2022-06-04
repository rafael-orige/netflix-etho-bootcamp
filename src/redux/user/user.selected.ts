import { RootState } from "../store/store";

export const authenticated = (state: RootState) => state.user.authenticated;