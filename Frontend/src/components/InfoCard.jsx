import PropTypes from 'prop-types';
import styles from './InfoCard.module.css';

const InfoCard = ({ children, title, labelText = '대학생', labelColor = 'steelblue' }) => {
  return (
    <div className={styles['info-card']}>
      <div className={styles['thumbnail']}>
        <img src="https://picsum.photos/200/300" alt="" />
        <div className={styles['gradation']} />
        <div className={styles['content-overlay']}>
          <div className={`${styles['label']} ${styles[labelColor]}`}>
            {
              <>
                <div className={styles['label-bubble']} />
                {labelText}
              </>
            }
          </div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles['content']}>{children}</div>
    </div>
  );
};

InfoCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  labelText: PropTypes.string,
  labelColor: PropTypes.string,
};

export default InfoCard;
