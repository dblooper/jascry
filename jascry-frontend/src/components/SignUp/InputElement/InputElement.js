import React from 'react';
import classes from './InputElement.module.css';

const InputElement = (props) => {
    let inputElement = null;
    switch(props.elementType) {
        case('input'): inputElement = <input onChange={props.change} className={classes.InputElement} value={props.value} {...props.additionalConfig} />;
        break;
        case('textarea'): inputElement = <textarea onChange={props.change} className={classes.InputElement} value={props.value} {...props.additionalConfig} />;
        break;
        case('select'): inputElement = <select onChange={props.change} className={classes.InputElement} value={props.value}>
                                        {
                                            props.additionalConfig.options.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}>
                                                        {option.displayValue}
                                                </option>
                                            ))
                                        }
                                    </select>;
        break;
        default: inputElement = <input 
                                    onChange={props.change}
                                    className={classes.InputElement}
                                    {...props.additionalConfig}
                                    value={props.value} />
    }
    
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            { inputElement }
        </div>
    );
}

export default InputElement;