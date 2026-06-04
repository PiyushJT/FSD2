// Create a React app:
// • Parent component stores language value (“English” or “Hindi”)
// • Pass language using useContext
// • Child component displays “Welcome” in selected language
// • Add button in parent to toggle language
import { createContext, useState } from 'react';
import Pb387c from './Pb387c.jsx';
const LanguageContext = createContext();
function Pb387() {
    const [language, setLanguage] = useState("English");
    const toggleLanguage = () => {
        setLanguage(lang => lang === "English" ? "Hindi" : "English");
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb387</h1>
            <LanguageContext.Provider value={language}>
                <Pb387c />
            </LanguageContext.Provider>
            <button onClick={toggleLanguage}>Toggle Language</button>
        </div>
    );
}
export default Pb387;
export { LanguageContext };