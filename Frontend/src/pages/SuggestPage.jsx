import { useState } from 'react';
import styles from './SuggestPage.module.css';
import NavigationBar from '../components/NavigationBar';
import TopBar from '../components/TopBar';
import NextButton from '../components/NextButton';

const SuggestPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      setIsSubmitted(true);
      // TODO: API 연동
      console.log('제안 제출:', { title, content });
    }
  };

  return (
    <div className={styles.page}>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading}>정책 제안하기</h1>
          <p className={styles.description}>
            경주시 발전을 위한 여러분의 의견을 들려주세요.
          </p>
          <div className={styles.inputGroup}>
            <label htmlFor="title" className={styles.label}>제목</label>
            <input
              id="title"
              type="text"
              placeholder="제안하실 정책의 제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.titleInput}
              disabled={isSubmitted}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="content" className={styles.label}>내용</label>
            <textarea
              id="content"
              placeholder="제안하실 정책의 내용을 자유롭게 작성해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.contentInput}
              disabled={isSubmitted}
            />
          </div>
          <NextButton 
            onClick={handleSubmit}
            disabled={isSubmitted || !title.trim() || !content.trim()}
          >
            {isSubmitted ? '제출완료' : '제안하기'}
          </NextButton>
        </div>
      </main>
      <NavigationBar />
    </div>
  );
};

export default SuggestPage;
