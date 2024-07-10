/* eslint-disable react/prop-types */
import '../../../App.css'

function ButtonTest({label, bgColor, txColor, rounded, sizeW, functionTest}) {
    
    

    return (
        <>
            <button onClick={functionTest} className={`h-14 bg-orange-400 ${bgColor} ${txColor} ${rounded} ${sizeW}`}>{label}</button>
        </>
    )
}

export {ButtonTest}