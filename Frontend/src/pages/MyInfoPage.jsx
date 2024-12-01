import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import useExampleCardMotion from '../hooks/useExampleCardMotion';
import styles from './MyInfoPage.module.css';
import InfoCard from '../components/InfoCard';
import SwipeReaction from '../components/SwipeReaction';
import NavigationBar from '../components/NavigationBar';
import TopBar from '../components/TopBar';
import PolicyModal from '../components/PolicyModal';
import { useState } from 'react';

const gyeongjuPolicies = [
  '경주 청년 주거 안정 지원사업',
  '청년 창업 지원 프로그램',
  '청년 일자리 창출 지원사업',
  '청년 문화예술인 육성 사업',
  '청년 농업인 스타트업 지원',
  '청년 소상공인 임대료 지원',
  '청년 건강검진 지원 프로그램',
  '청년 커뮤니티 활성화 사업',
  '청년 교육비 지원 사업',
  '청년 취업 역량 강화 프로그램',
  '청년 독서문화 프로그램',
  '청년 친환경 창업 지원사업',
  '청년 관광 스타트업 육성',
  '청년 문화활동 지원사업',
  '청년 봉사활동 지원 정책',
  '청년 시장 창업 지원사업',
  '청년 친환경 이동수단 지원',
  '청년 심리상담 지원 프로그램',
  '청년 디지털 역량 강화 사업',
  '청년 정책 참여단 운영',
];

const gyeongjuPolicyDetails = [
  '경주 지역 청년들의 주거비 부담을 덜어주기 위해 월세 지원금을 제공하는 사업입니다.',
  '청년들의 혁신적인 창업 아이디어를 실현할 수 있도록 자금 및 멘토링을 지원합니다.',
  '지역 기업과 연계하여 청년들에게 양질의 일자리를 제공하고 취업을 지원합니다.',
  '청년 예술가들의 창작활동을 지원하고 문화예술 분야 일자리를 창출합니다.',
  '청년 농업인들의 성공적인 정착을 위해 영농자금과 기술교육을 지원합니다.',
  '청년 소상공인들의 사업 안정화를 위해 임대료 지원금을 제공합니다.',
  '청년들의 건강한 삶을 위해 정기 건강검진과 운동 프로그램을 지원합니다.',
  '청년들의 네트워킹과 소통을 위한 커뮤니티 공간과 활동을 지원합니다.',
  '청년들의 자기계발을 위한 교육비와 학원비를 지원하는 프로그램입니다.',
  '취업 준비 청년들을 위한 직무교육과 자격증 취득을 지원합니다.',
  '청년들의 독서문화 증진을 위한 도서구입비 지원과 독서모임을 운영합니다.',
  '환경 분야 청년 창업자들에게 특화된 지원금과 컨설팅을 제공합니다.',
  '관광 분야에서 혁신적인 아이디어를 가진 청년 창업자들을 지원합니다.',
  '청년들의 문화예술 활동과 창작 프로젝트를 지원합니다.',
  '청년들의 사회공헌 활동을 장려하고 봉사활동 기회를 제공합니다.',
  '전통시장 내 청년 상인들의 창업과 운영을 지원합니다.',
  '자전거, 전동킥보드 등 친환경 이동수단 구매를 지원합니다.',
  '청년들의 정신건강을 위한 전문 상담과 치료를 지원합니다.',
  '청년들의 디지털 역량 강화를 위한 교육과 자격증 취득을 지원합니다.',
  '청년들이 직접 정책을 제안하고 평가하는 참여형 프로그램입니다.',
];

const Card = ({ card, index, focusedIndex, getCardMotionProps, shouldRenderCard }) => {
  if (!shouldRenderCard(index)) return null;

  const isFocused = index === focusedIndex;
  const motionProps = getCardMotionProps(index, isFocused);

  return (
    <motion.div
      key={card}
      className={`${styles.card} ${isFocused ? styles.focused : ''}`}
      {...motionProps}
    >
      <InfoCard title={gyeongjuPolicies[index % 20]} index={index + 1}>
        {gyeongjuPolicyDetails[index % 20]}
      </InfoCard>
    </motion.div>
  );
};

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackgroundClick = () => {
    if (focusedIndex !== null) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <TopBar />
      <div className={styles.container} onClick={handleBackgroundClick}>
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
      <PolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={focusedIndex !== null ? gyeongjuPolicies[focusedIndex % 20] : ''}
        content={focusedIndex !== null ? gyeongjuPolicyDetails[focusedIndex % 20] : ''}
      />
    </div>
  );
};

export default CardsExamplePage;
