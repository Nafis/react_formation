import React from 'react';
import styles from './FlexVgrow1.module.css';

interface FlexVgrow1Props {
  children:string|React.ReactElement|Array<React.ReactElement|string>
}

const FlexVgrow1: React.FC<FlexVgrow1Props> = ({children}) => (
  <div className={styles.FlexVgrow1} data-testid="FlexVgrow1">
    {children}
  </div>
);

export default FlexVgrow1;
