import  express from "express"
import { addUser, deleteUser, getUser, loginUser, updateUser } from "../controllers/userController.js"
import authController from "../controllers/authController.js"


var UserRouter = express.Router()

UserRouter.get('/',authController,getUser)
UserRouter.post('/',addUser)
UserRouter.post('/login',loginUser)
UserRouter.patch('/:id', updateUser)
UserRouter.delete('/:id' ,deleteUser)

export default UserRouter;