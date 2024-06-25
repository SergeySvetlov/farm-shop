import React from "react";
import { Ul, Li } from "../../elements/index.js";
import Checkbox from "../checkbox/checkbox.jsx";

export default function CheckboxList({name, options, selectValues, labelComponent, onClickLabel = () => {}, onChange}) {

    const handleChange = (value) => {
        const newValue = [...selectValues];
        const indexValue = newValue.indexOf(value);
        if (indexValue !== -1) {
          newValue.splice(indexValue, 1);
        } else {
          newValue.push(value);
        }
        onChange && onChange(newValue);
      };

    return (
        <Ul>
        {options.map((option, index) => {
           return (
           <Li key={option.id}>
                <Checkbox name={name} value={option.value} isChecked={selectValues.includes(option.value)} labelComponent={labelComponent} text={option.title} onClick={(value) => onClickLabel(value, index)} onChange={handleChange} selectValues={selectValues}/>
           </Li>)
        })}
        </Ul>
    );
};