import ContainerWork from "../../components/sectionWork/ContainerWork";
import desktopIcon from '../../assets/images/image/desktopIcon.png';
import officeIcon from '../../assets/images/image/officeIcon.png';
import webIcon from '../../assets/images/image/webIcon.png';
import './HowItWork.css'


const HowItWork = () => {
  return (
    <>
      <section className="how-to-work" id="how-to-work">
        <div className="how-to-work__header-container">
          <h2 className="how-to-work__title">КАК ЭТО РАБОТАЕТ</h2>
          <button>Узнать больше</button>
        </div>
        <div className='how-to-work__work-container'>
          <ContainerWork src={
            desktopIcon
          }
            title="Удобный заказ на сайте"
          />
          <ContainerWork src={
            officeIcon
          }
            title="Удобный заказ на сайте"
          />
          <ContainerWork src={
            webIcon
          }
            title="Удобный заказ на сайте"
          />

        </div>
      </section>
    </>
  )
}

export default HowItWork;