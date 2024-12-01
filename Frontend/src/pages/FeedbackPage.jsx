import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import useExampleCardMotion from '../hooks/useExampleCardMotion';
import styles from './FeedbackPage.module.css';
import GoodBadCard from '../components/GoodBadCard';
import InvestigateCard from '../components/InvestigateCard';
import MCQCard from '../components/MCQCard';
import SwipeReaction from '../components/SwipeReaction';
import NavigationBar from '../components/NavigationBar';
import TopBar from '../components/TopBar';

// Dummy data for different card types
const dummyData = {
  goodBad: [
    {
      title: '정책 평가',
      content: '경주 내 대학생 작학 지원 사업이 도움이 되었나요?',
      good: '등록금 부담이 크게 줄어들었어요',
      bad: '신청 절차가 너무 복잡했어요',
      children: '대학생 작학 지원 사업은 등록금 부담을 줄이고 학업에 집중할 수 있도록 돕는 정책입니다.'
    },
    {
      title: '시설 개선',
      content: '새로 설치된 전기차 충전소에 대해 어떻게 생각하시나요?',
      good: '충전소 위치가 접근하기 좋아요',
      bad: '대기 시간이 여전히 긴 편이에요',
      children: '경주시는 친환경 교통수단 활성화를 위해 전기차 충전소를 확대 설치하고 있습니다.'
    }
  ],
  investigate: [
    {
      title: '시민 의견 조사',
      content: '경주시 공공 Wi-Fi 설치 확대에 대한 의견을 들려주세요',
      placeholder: '설치가 필요한 장소나 개선사항을 자유롭게 작성해주세요',
      children: '시민들의 디지털 접근성 향상을 위해 공공장소에 Wi-Fi를 확대 설치할 예정입니다.'
    },
    {
      title: '정책 제안',
      content: '청년 창업 지원 프로그램에서 추가되었으면 하는 지원 항목이 있나요?',
      placeholder: '필요한 지원 항목을 구체적으로 알려주세요',
      children: '청년들의 창업 도전을 지원하기 위해 자금 지원과 멘토링을 제공하고 있습니다.'
    }
  ],
  mcq: [
    {
      title: '관광 정책',
      content: '경주 관광 활성화를 위해 가장 시급한 것은 무엇일까요?',
      options: [
        '문화재 야간 관람 확대',
        '외국어 안내 서비스 강화',
        '관광지 주차 시설 확충',
        '관광 콘텐츠 다양화'
      ],
      children: '경주시는 세계적인 관광도시로 도약하기 위해 다양한 정책을 추진하고 있습니다.'
    },
    {
      title: '교통 환경',
      content: '경주시 대중교통 개선을 위해 우선적으로 필요한 것은?',
      options: [
        '버스 노선 확대',
        '배차 간격 단축',
        '심야 버스 운영',
        '교통 카드 통합'
      ],
      children: '시민과 관광객의 편의를 위해 대중교통 서비스를 개선하고자 합니다.'
    },
    {
      title: '문화 생활',
      content: '경주시에 가장 필요한 문화시설은 무엇인가요?',
      options: [
        '복합 문화 센터',
        '공연장',
        '도서관',
        '생활체육시설'
      ],
      children: '시민들의 문화생활 향상을 위해 다양한 문화시설을 확충할 계획입니다.'
    },
    {
      title: '청년 지원',
      content: '청년층 유입을 위해 가장 중요한 정책은?',
      options: [
        '일자리 창출',
        '주거비 지원',
        '문화 공간 조성',
        '창업 지원'
      ],
      children: '지역 발전을 위해 청년층의 경주 정착을 적극 지원하고 있습니다.'
    },
    {
      title: '환경 보호',
      content: '경주의 환경 보호를 위해 가장 필요한 것은?',
      options: [
        '재활용 시설 확충',
        '친환경 에너지 확대',
        '무동력 교통 활성화',
        '생태 공원 조성'
      ],
      children: '역사 문화 도시 경주의 지속 가능한 발전을 위해 환경 보호에 힘쓰고 있습니다.'
    },
    {
      title: '주민 선호도 조사',
      content: '가장 시급하게 확충이 필요한 시설은 무엇인가요?',
      options: ['공공도서관', '체육시설', '주차시설', '문화공간'],
      children: '주민들의 생활 편의를 위해 우선적으로 확충이 필요한 시설을 선정하고자 합니다.'
    },
    {
      title: '정책 만족도',
      content: '경주시 친환경 에너지 전환 지원 프로젝트 중 가장 효과적이었던 것은?',
      options: ['태양광 패널 지원', '에너지 절약 캠페인', '친환경 설비 교체 지원', '에너지 진단 서비스'],
      children: '친환경 도시로의 전환을 위해 다양한 에너지 정책을 시행하고 있습니다.'
    }
  ]
};

// Generate random cards data at component initialization
const generateRandomCards = (count) => {
  const cards = [];
  const cardTypes = ['goodBad', 'investigate', 'mcq'];
  
  for (let i = 0; i < count; i++) {
    const randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const randomData = dummyData[randomType][Math.floor(Math.random() * dummyData[randomType].length)];
    cards.push({ type: randomType, data: randomData });
  }
  return cards;
};

const Card = ({ card, index, focusedIndex, getCardMotionProps, shouldRenderCard }) => {
  if (!shouldRenderCard(index)) return null;

  const cardData = RANDOM_CARDS[index % RANDOM_CARDS.length];

  return (
    <motion.div
      className={`${styles.card} ${index === focusedIndex ? styles.focused : ''}`}
      {...getCardMotionProps(index, index === focusedIndex)}
    >
      {cardData.type === 'goodBad' && (
        <GoodBadCard
          title={cardData.data.title}
          content={cardData.data.content}
          good={cardData.data.good}
          bad={cardData.data.bad}
        >
          {cardData.data.children}
        </GoodBadCard>
      )}
      {cardData.type === 'investigate' && (
        <InvestigateCard
          title={cardData.data.title}
          content={cardData.data.content}
          placeholder={cardData.data.placeholder}
        >
          {cardData.data.children}
        </InvestigateCard>
      )}
      {cardData.type === 'mcq' && (
        <MCQCard
          title={cardData.data.title}
          content={cardData.data.content}
          options={cardData.data.options}
        >
          {cardData.data.children}
        </MCQCard>
      )}
    </motion.div>
  );
};

// Generate a fixed set of random cards
const RANDOM_CARDS = generateRandomCards(20);

Card.propTypes = {
  card: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  focusedIndex: PropTypes.number.isRequired,
  getCardMotionProps: PropTypes.func.isRequired,
  shouldRenderCard: PropTypes.func.isRequired,
};

const CardsExamplePage = () => {
  const {
    cards,
    focusedIndex,
    getCardMotionProps,
    shouldRenderCard,
    showThumbsUp,
    showThumbsDown,
  } = useExampleCardMotion();

  return (
    <div className={styles.pageContainer}>
      <TopBar />
      <div className={styles.container}>
        <SwipeReaction type="thumbsUp" isVisible={showThumbsUp} />
        <SwipeReaction type="thumbsDown" isVisible={showThumbsDown} />
        <AnimatePresence>
          <div
            className={styles['cards-example-page']}
            style={{ backgroundColor: 'rgb(231 237 247)' }}
          >
            <div className={styles['cards-container']}>
              {cards.map((card, index) => (
                <Card
                  key={card}
                  card={card}
                  index={index}
                  focusedIndex={focusedIndex}
                  getCardMotionProps={getCardMotionProps}
                  shouldRenderCard={shouldRenderCard}
                />
              ))}
            </div>
          </div>
        </AnimatePresence>
      </div>
      <NavigationBar />
    </div>
  );
};

export default CardsExamplePage;
