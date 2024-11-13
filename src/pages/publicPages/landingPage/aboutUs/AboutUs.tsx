import PublicPageContainer from '@components/container/PublicPageContainer';
import Header from './components/Header';

const AboutUs = () => {
  return (
    <PublicPageContainer
      className="py-[60px]"
      gradientDirection="45deg"
      gradientColors={['#c7e8f2', '#EDE7F4', '#EDE7F4']}
      gradientPositions={['0%', '60%', '100%']}
    >
      <Header />
    </PublicPageContainer>
  );
};

export default AboutUs;
