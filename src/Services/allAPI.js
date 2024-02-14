import { commonAPI } from "./commonAPI"
import { Server_URL } from "./serverURL"


// student register
export const studentRegisterAPI=(student)=>{
    return commonAPI("POST",`${Server_URL}/register`,student)
}

// student register
export const getAllStudentAPI=()=>{
    return commonAPI("GET",`${Server_URL}/studentlist`,"")
}