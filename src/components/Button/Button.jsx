import React from 'react';

export const Button = (props) => {
  const checkSize =
    props.size === 'lg' ? 'm-button' : props.size === 'm' ? 'm-button' : 'sm-button';
  const checkTextSize = props.size === 'lg' ? 'lg-text-button' : 'm-text-button';
  const width = props.width === 'full' ? 'w-full' : '';

  return (
    <button className={`${checkSize} ${width}`}>
      {props.icon && (
        <span className='w-[20px]'>
          <img className='w-[20px]' src={props.icon} alt='' />
        </span>
      )}
      <span className={`${checkTextSize}`}>{props.title}</span>
    </button>
  );
};
