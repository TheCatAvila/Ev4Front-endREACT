import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HomePage } from "../heroes/pages/HomePage"
import { AnimePage } from "../heroes/pages/AnimePage"
import { ComicPage } from "../heroes/pages/ComicPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="login" element={<LoginPage/>}></Route>
            <Route path="home" element={<HomePage/>}></Route>
            <Route path="animes" element={<AnimePage/>}></Route>
            <Route path="comics" element={<ComicPage/>}></Route>
        </Routes>
    </>
  )
}