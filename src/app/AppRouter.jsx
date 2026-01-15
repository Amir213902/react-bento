import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Redirect from './Redirect'
import { PUBLIC_ROUTES } from '../constants/routes'

function AppRouter() {
    return (
        <Routes>
            {PUBLIC_ROUTES.map((el, index) => (
                <Route key={index} path={el.path} Component={el.component}></Route>
            ))}
            <Route path='*' Component={Redirect} />
        </Routes>
    )
}

export default AppRouter
