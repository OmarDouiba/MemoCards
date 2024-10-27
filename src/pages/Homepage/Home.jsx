import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutUs from '../../components/AboutUs/AboutUs';
import Divider from '../../components/shared/Divider';
import PathSection from '../../components/PathSection/PathSection';
import ExploreSection from '../../components/ExploreSection/ExploreSection';
import PlayStore from '../../assets/playstore.png';
import MostViewedLists from '../../components/MostViewedLists/MostViewedLists';

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />

      <ExploreSection
        title="All courses, all exams, an essential app for success."
        image={
          <img
            src={PlayStore}
            alt="Download on Play Store"
            className="w-24 mb-4"
          />
        }
      >
        Create your own lists or find lists created by teachers, students, and
        experts. Study them anytime, anywhere, with our free app.
      </ExploreSection>
      <ExploreSection
        title="Generate course materials in an instant"
        orderd={false}
        addButton={true}
        buttonText={'Try it out.'}
      >
        Transform your presentations, videos, and notes into lists, practice
        tests, and study plans.
      </ExploreSection>
      <ExploreSection
        title="Exam preparation in all subjects."
        addButton={true}
        buttonText={'Start now.'}
      >
        Memorize everything you need to learn with personalized practice tests
        and the Learn mode exercises. 98% of students say Quizlet helps them
        understand better.
      </ExploreSection>

      <PathSection />

      <MostViewedLists />
    </div>
  );
}

export default Home;
