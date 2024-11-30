import styles from './Card.module.css';

const Card = ({ children, title }) => {
  children = '어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고';
  title = '경주 내 대학생 장학지원 사업 대상자 모집';

  return (
    <div className={styles['card']}>
      <div className={styles['thumbnail']}>
        <img src="https://picsum.photos/200/300" alt="" />
        <div className={styles['content-overlay']}>
          <div className={styles['label']}>대학생</div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles['content']}>{children}</div>
    </div>
  );
};

export default Card;
