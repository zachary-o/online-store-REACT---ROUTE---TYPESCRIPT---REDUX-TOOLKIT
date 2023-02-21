import React from "react";

import styles from "./NotFoundBlock.module.scss"

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>4😕4</span>
        <br />
        Not found
      </h1>
    </div>
  );
};

export default NotFoundBlock;
