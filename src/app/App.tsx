import React, { Suspense } from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";

const App = () => {
    const {theme} =  useTheme()

    const Component = () => {
        const {t, i18n} = useTranslation()

        const toggleLang = () => {
            i18n.changeLanguage(i18n.language === 'ru'? 'en' : 'ru')
        }

        return (
            <div>
                <button onClick={toggleLang}>{t('Перевод')}</button>
                {t('Тестовый перевод')}
            </div>
        )
    }

    return (
        <Suspense fallback={''}>
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <Component/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};

export default App;