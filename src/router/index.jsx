import { BrowserRouter, Route, Routes } from "react-router"
import SkipSelector from "../containers/SkipSelector.jsx"

const routingPages = [
   {
       component: SkipSelector,
       path: '/',
       children:false
   },]

/**
 * @example Scalable Routing Strategy takes in array of routes and components and childrens for subpaths 
 * @returns {JSX.Element} React Router - Returns APP routes
*/

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes >
                {
                routingPages?.map(({ component: Component, path }, i) => {return <Route key={i} path={path} element={<Component />} />})
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes