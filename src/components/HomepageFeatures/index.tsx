import { onClickUrl } from '@site/src/utils';
import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.centered}>
          <img src="/Karthikeyan_S-Resume.png" onClick={onClickUrl("/Karthikeyan_S-Resume.pdf")} className={styles.resume}/>
    </div>
  );
}
