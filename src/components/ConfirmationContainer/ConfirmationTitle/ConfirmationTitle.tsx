import './ConfirmationTitle.css';

interface ConfirmationTitleProps {
  title: string;
}

const ConfirmationTitle = ({title}: ConfirmationTitleProps ) => {

  return (
    <h3 className='confirmation__container-title'>{title}</h3>
  )
}

export default ConfirmationTitle;