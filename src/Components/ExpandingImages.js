import React from 'react';
import styles from './ExpandingImages.module.css'; // Import the module.css file

function ExpandingImages() {
  return (
    <>
      <div className={styles.dd_heading}>
        <h1 className={styles.text_center}><strong>SERVICES : That we provide !!!</strong></h1>
      </div>
      <main className={styles.page_content}>
        <div className={styles.d_card}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Website Development</h2>
            <p className={styles.data_content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className={styles.d_card}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Web Application Development</h2>
            <p className={styles.data_content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className={styles.d_card}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Social Media Management</h2>
            <p className={styles.data_content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className={styles.d_card}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Cloud Storage Solutions</h2>
            <p className={styles.data_content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ExpandingImages;
