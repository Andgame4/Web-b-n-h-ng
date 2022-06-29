import React, { useMemo } from 'react';
import { useState } from 'react';

type inputProps = {
  value: string;
  type?: string;
  id: string;
  className: string;
  placeholder: string;
  onChange: (e: any) => void;
  errorText?: string;
  customClass?: string;
};

const Input = ({ errorText, customClass, ...props }: inputProps) => {
  const inputClass = useMemo(() => {
    return `${errorText && 'border-red'} form-control form-control-lg`;
  }, [errorText]);

  return (
    <div>
      <p>{errorText}</p>
      <input {...props} className={customClass || inputClass} />
    </div>
  );
};

export default Input;
