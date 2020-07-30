import React from 'react';

function FormField({ label, type, ...rest }) {
    return(
     <div>
        <label>
            {label}:
            {type==="textarea"?
                <textarea
                type={type}
                {...rest}
                /> :
                <input
                type={type}
                {...rest}
                />
        
            }
            
        </label>
     </div>
    )
}

export default FormField;