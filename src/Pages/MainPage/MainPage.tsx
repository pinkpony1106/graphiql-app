import AboutCourse from '../../Components/AboutCourse/AboutCourse';
import AboutGraphi from '../../Components/AboutGraphl/AboutGraphl';
import AboutTeam from '../../Components/AboutTeam/AboutTeam';
import Welcome from '../../Components/Welcome/Welcome';
import style from './mainPage.module.css';

function MainPage() {
  return (
    <div className={style.container}>
      <div className={style.aboutContainer}>
        <Welcome />
        <AboutGraphi />
        <AboutTeam />
        <AboutCourse />
      </div>
    </div>
  );
}

export default MainPage;
