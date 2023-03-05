import User from "../../database/models/UserModel";

const allUsers: User[] = [
  {
    "id": 1,
    "username": "Admin",
    "role": "admin",
    "email": "admin@admin.com",
    "password": "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW"
  },
  {
    "id": 2,
    "username": "User",
    "role": "user",
    "email": "user@user.com",
    "password": "$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO"
  },
  {
    "id": 3,
    "username": "User",
    "role": "user",
    "email": "@user.com",
    "password": "$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO"
  },
  {
    "id": 4,
    "username": "User",
    "role": "user",
    "email": "invalid.user@user.com",
    "password": "$2a$10$HDkFwOMKOI6PTza0F7.YRu1Bqsqb9hx7XkuV7QeYB5dRL4z9DI1Mu"
  },
  {
    "id": 5,
    "username": "Admin2",
    "role": "admin2",
    "email": "admin2@admin.com",
    "password": "$222a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW"
  }
] as User[];


const userMock: User = {
    "email": "admin@admin.com",
    "password": "secret_admin"
  } as User;


export {
  userMock,
  allUsers
}