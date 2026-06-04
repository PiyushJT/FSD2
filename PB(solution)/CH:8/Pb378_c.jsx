import {useContext} from 'react';
import {ColorContext} from './Pb378.jsx';
function Pb378c() {
    const { backgroundColor, fontColor } = useContext(ColorContext);
    return (
        <div style={{ backgroundColor: backgroundColor, color: fontColor, padding: '20px' }}>
            Welcome to LJU
        </div>
    );
}
export default Pb378c;