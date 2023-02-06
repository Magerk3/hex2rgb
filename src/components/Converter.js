import { useState } from "react";

export const Converter = () => {
    const [hexColor, setHexColor] = useState("#");
    const [rgbColor, setRgbColor] = useState("");
    function handleChange(e) {
        e.target.value.length <= 7 && e.target.value.length >= 1 && setHexColor(e.target.value);
        e.target.value.length === 7 && e.target.value[0] === '#' && setRgbColor(hexToRgb(e.target.value))
    };  
    function hexToRgb(hex){
    
        const r = parseInt(hex.substring(1,3), 16);
        const g = parseInt(hex.substring(3,5), 16);
        const b = parseInt(hex.substring(5,7), 16);
        if(isNaN(r) || isNaN(g) || isNaN(b)) return "error"
        return "rgb(" + r + ", " + g + ", " + b + ")";
    
    }    
        
    function color(rgbColor){
        return rgbColor === 'error' ? '#FF2600'  : rgbColor;
    }
    
    return (
        <div className="back" style={{ backgroundColor: color(rgbColor) }}>
            <div className="colors">
                <input
                    className="hexColorInput"
                    value={hexColor}
                    onChange={handleChange}
                ></input>
                <p className="rgbColorOutput">{rgbColor}</p>
            </div>
        </div>
    );
};
