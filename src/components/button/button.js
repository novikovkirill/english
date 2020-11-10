import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

const Button = ({
  primary = false,
  secondary = false,
  small = false,
  block = false,
  active = false,
  children,
  ...props
}) => {

  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.small]: small,
        [styles.block]: block,
        [styles.active]: active
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
