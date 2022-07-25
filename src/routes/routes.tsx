import { MainPage } from "../pages/MainPage"
import { UserPage } from "../pages/UserPage"


export const routes = [
	{ path: '', component: < MainPage /> },
	{ path: '/users/:id', component: <UserPage /> }
]