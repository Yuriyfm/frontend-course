import React, {Suspense, useContext} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} =  useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'./'}> На главну</Link>
            <Link to={'./about'}>О проекте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync/>} />
                    <Route path='/' element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>
                {theme === Theme.LIGHT ? 'Dark' : 'Light'}
            </button>
        </div>
    );
};

export default App;