

type Roles = 'admin' | 'student' | 'parent'


type UserType = `user: ${Capitalize<Roles>}`


let user1: UserType = "user: Admin"
