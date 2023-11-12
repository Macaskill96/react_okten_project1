import React, {createContext, Dispatch, FC, SetStateAction, useState} from 'react';
interface ITheme {
    children:React.ReactNode
}

interface ThemeContextProps {
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeContextProvider: FC<ITheme> = ({children}) => {
    const [theme, setTheme] = useState(false);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider, ThemeContext };
