import { Spin } from 'antd';
import React from 'react';
import styles from './index.module.less';

const PageFallback = () => {
  return (
    <div className={styles.PageFallback}>
      <Spin/>
    </div>
  );
};

export default PageFallback;
