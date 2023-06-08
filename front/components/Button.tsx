import React, { FC, MouseEvent ,ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
  }

const Button: FC<ButtonProps> = ({text ,...props}) => {
 return (
 <div className='bg-sky-400 text-white text-lg w-64 h-14 rounded-full flex justify-center'>
 <button {...props} >{text} </button>
 </div>
 );
};

export default Button;
