import {FC, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "app/providers/ThemeProvider/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

type ThemeProviderProps = {
    children: ReactNode;
};


const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;