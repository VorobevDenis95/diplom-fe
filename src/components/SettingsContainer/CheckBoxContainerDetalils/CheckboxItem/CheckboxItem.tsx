import { useSearchParams } from "react-router-dom";

interface CheckBoxItemProps {
  src: string;
  title: string;
  params: string
}

const CheckBoxItem = ({src, title, params}: CheckBoxItemProps) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(params) ? !!searchParams.get(params) : false;

  const prevParams = Object.fromEntries(searchParams);
  setSearchParams({...prevParams, params: `${value}`})

  
  return (
    <div className="checkbox__container">
      <img src={src} alt="icon__wagon-type" />
      <span>{title}</span>
      <input type="checkbox" checked={value} />
    </div>
  )
}

export default CheckBoxItem;