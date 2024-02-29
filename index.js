// index.js

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function UntitledPage(props) {
  return (
    <div className={cn(styles.root, props.className, 'untitled-page')}>
      <h1 className={styles.hero_title}>ҚАЗАҚ ҚАУЫМДАСТЫҚТЫҢ АТАУЫ</h1>
      <div className={styles.rect} />
      <p className={styles.desc}>Логотип</p>
      <h3 className={styles.subtitle}>Әлеуметтік желілері:</h3>
      <div className={styles.images}>
        {[...Array(5)].map((_, index) => (
          <img key={index} className={styles[`image${index}`]} src={`/assets/${index}.png`} alt="alt text" />
        ))}
      </div>
      <div className={styles.subtitles}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={styles[`subtitle${index}`]}>
            <h3>23 февраля 2024</h3>
            <h3>Oтандастар:«Болашаққа бағдар» дөңгелек үстелі</h3>
          </div>
        ))}
      </div>
      <div className={styles.rect1} />
      <h3 className={styles.subtitle3}>Барлығы</h3>
      <h3 className={styles.subtitle4}>Алдағы</h3>
      <h3 className={styles.subtitle41}>ОҚ-мен бірге</h3>
      <h3 className={styles.subtitle5}>Іс-шаралар:</h3>
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.line} />
      <div className={styles.rect4} />
      <h2 className={styles.medium_title}>Ұйым Қызметі:</h2>
      <div className={styles.rect5} />
      <div className={styles.rect6} />
      <h2 className={styles.medium_title1}>Тату емес ұйымдар</h2>
      <div className={styles.rect7} />
      <div className={styles.rect8} />
      <h2 className={styles.medium_title11}>Бейбіт ұйымдар</h2>
      <h2 className={styles.medium_title2}>Ұйым өкілдері </h2>
      <h1 className={styles.title}>АТЫ ЖӨНІ</h1>
      <h3 className={styles.subtitle51}>лауазымы</h3>
      <div className={styles.rect9} />
      <p className={styles.desc1}>Логотип</p>
      <h1 className={styles.title1}>АТЫ ЖӨНІ</h1>
      <h3 className={styles.subtitle52}>лауазымы</h3>
      <div className={styles.rect91} />
      <p className={styles.desc2}>Логотип</p>
      <h1 className={styles.title2}>АТЫ ЖӨНІ</h1>
      <h3 className={styles.subtitle53}>лауазымы</h3>
      <div className={styles.rect92} />
      <p className={styles.desc3}>Логотип</p>
    </div>
  );
}

UntitledPage.propTypes = {
  className: PropTypes.string
};

export default UntitledPage;
