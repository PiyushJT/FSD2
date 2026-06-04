import {useContext} from 'react';
import { LanguageContext } from './Pb387.jsx';
function Pb387c() {
    const language = useContext(LanguageContext);
    return (
        <div>
            {language === "English" ? <h2>Welcome</h2> : <h2>स्वागत है</h2>}
        </div>
    );
}
export default Pb387c;