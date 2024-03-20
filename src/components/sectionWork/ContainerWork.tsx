import { ContainerWorkProps } from "../../shared/types/types";
import './ContainerWork.css';

const ContainerWork = ({src, title}: ContainerWorkProps) => {
  return (
    <div className="advantages__container">
      <img className="advantages__image"
      src={src} alt="icon" />
      <p className="advantages__description"
      >{title}</p>
    </div>
  )
}

export default ContainerWork;