import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { CreateTagController } from "./controllers/CreateTagController"
import { CreateUserController } from "./controllers/CreateUserController"
import { ListTagsController } from "./controllers/ListTagsController"
import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiveComplimentController"
import { ListUsersController } from "./controllers/ListUsersController"
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router =  Router()

const createUserController = new CreateUserController
const createTagController = new CreateTagController
const authenticateUserController = new AuthenticateUserController
const createComplimentController = new CreateComplimentController
const listUserSendComplimentController = new ListUserSendComplimentController
const listUserReceiveComplimentController = new ListUserReceiveComplimentController
const listTagsController = new ListTagsController
const listUsersController = new ListUsersController

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, ensureAdmin, listUsersController.handle)

export { router }