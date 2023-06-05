export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActionType {
    FETCH_USERS = "FETCH_USER",
    FETCH_USERS_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USER_ERROR",
}

interface FetchUsersAction {
    type: UserActionType.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction {
    type: UserActionType.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction;
