import React, { FC, FormEvent, useRef } from "react";
import classes from "./FormInput.module.css";

const FormInput: FC<{
  label: string;
  btnText: string;
  onSubmit: (text: string) => void;
}> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onSubmit(enteredText);
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <label htmlFor="text">{props.label}</label>
      <input type="text" id="text" ref={inputRef}></input>
      <button>{props.btnText}</button>
    </form>
  );
};

export default FormInput;
