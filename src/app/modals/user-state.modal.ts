import { UserModal } from "./user.modal";

// Modal for User state
export interface UserState {
    users: UserModal[];
    selectedUser: UserModal | null;
    loading: boolean;
    error: any;
}