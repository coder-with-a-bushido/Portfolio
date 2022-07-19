import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="relative h-0 overflow-hidden max-w-full w-full" 	>
          <object
            data={"/Karthikeyan S - Resume.pdf#view=fit"}
            type="application/pdf"
            width="100%"
            height="900px"
          />
    </div>
  );
}
