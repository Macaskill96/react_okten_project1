import {useContext} from "react";

import { ThemeContext} from "../hoc";


const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    const { theme, setTheme } = themeContext;

    const changeTrigger = () => {
        setTheme((prevTheme) => !prevTheme);
    };

    return {
        theme,
        changeTrigger,
    };
};

export { useTheme };