export interface UserRequest {
    username:string;
    password:string;
}

export interface UserResponse {
    id:number; 
    username:string;
    token:string;
}