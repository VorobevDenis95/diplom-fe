import './SelectSeatsContainer2.css'
import { CoachSeatsRequestProps } from '../../../shared/types/typesSeats';
import { useAppSelector } from '../../../shared/redux/redux-hooks';
import { useDispatch } from 'react-redux';
import { setServicesObj } from '../../../shared/redux/slice/trainSlice';
import { useEffect, useState } from 'react';


export interface SelectSeatsContainerProps2 { 
  coach: CoachSeatsRequestProps,
  typeDirection: "departure" | "arrival";
}

const SelectSeatsContainer2 = ({coach, typeDirection} : SelectSeatsContainerProps2) => {
  
    const { arrival, departure } = useAppSelector(state => state.train);
  const [activeDirection, setActiveDirection] = useState(typeDirection === "departure" ? departure : arrival);

  useEffect(() => {
    typeDirection === "departure" ? setActiveDirection(departure) : setActiveDirection(arrival);
  }, [typeDirection, departure, arrival])

  // const {servicesObj} = useAppSelector(state => state.train);
  const dispatch = useDispatch();
  // const {servicesObj} = useAppSelector(state => state.train);

  const clickLinens = () => {
    if (coach.is_linens_included) return;
    dispatch(setServicesObj({ key: 'linens', value: !activeDirection.servicesObj.linens, typeDirection: typeDirection }));
  }
  
  const clickWifi = () => {
    dispatch(setServicesObj({ key: 'wifi', value: !activeDirection.servicesObj.wifi, typeDirection }));
  }

  // useEffect(() => {
    
  // }, [coach])


  return (
    <>
    
      <div className='services'>
         { coach.have_air_conditioning && 
         <div className='services__item services__include'>
            <div className='services__item-tooltip'>Кондиционер </div>
            {/* <img className='icon' src={airConditionIcon} alt="services__icon" /> */}
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.0993 11.641C7.71469 11.8691 7.35884 12.0788 7.00299 12.2885C6.38474 12.6527 5.77369 13.0205 5.15184 13.3774C5.02963 13.4473 4.9865 13.5319 4.97931 13.6643C4.93258 14.3964 4.87867 15.1321 4.82834 15.8642C4.79959 16.2946 4.49406 16.5889 4.08788 16.5742C3.69249 16.5595 3.40134 16.2284 3.41572 15.798C3.4301 15.4632 3.45526 15.1248 3.47683 14.79C3.48402 14.6576 3.4912 14.5251 3.49839 14.3633C3.39056 14.4258 3.30789 14.47 3.22521 14.5178C2.68245 14.8378 2.13969 15.1616 1.59333 15.4816C1.31296 15.6435 0.989462 15.603 0.759416 15.3897C0.547343 15.1947 0.453887 14.8489 0.590477 14.584C0.66596 14.4369 0.795361 14.2934 0.935545 14.2051C1.49269 13.8556 2.06061 13.5319 2.62494 13.1971C2.67526 13.1677 2.72558 13.1346 2.79388 13.0941C2.36973 12.8807 1.96715 12.6821 1.56457 12.4798C1.21232 12.2995 1.05776 11.9537 1.1584 11.5969C1.28061 11.1738 1.73351 10.9604 2.13969 11.1554C2.80107 11.4718 3.45526 11.8029 4.10945 12.134C4.23526 12.2002 4.33231 12.1965 4.45452 12.1229C5.3747 11.5711 6.29848 11.0303 7.21866 10.4859C7.26898 10.4564 7.3193 10.4233 7.39479 10.3755C7.1935 10.2578 7.01018 10.1474 6.82686 10.0407C6.03968 9.57354 5.24889 9.11369 4.4653 8.63913C4.32871 8.55452 4.22447 8.56188 4.08788 8.63177C3.45167 8.95918 2.81185 9.27556 2.16844 9.58825C1.78743 9.77587 1.37766 9.63975 1.20153 9.27556C1.01822 8.904 1.16559 8.48462 1.5502 8.28597C1.90245 8.10203 2.25831 7.92913 2.61056 7.74887C2.66448 7.72312 2.7148 7.69369 2.78669 7.65322C2.24393 7.33317 1.72273 7.02415 1.20153 6.71514C1.10448 6.65628 1.00384 6.6011 0.906789 6.53856C0.547343 6.31783 0.428726 5.89478 0.622827 5.54161C0.820522 5.18477 1.24826 5.07073 1.61849 5.2841C2.20079 5.62255 2.7795 5.96835 3.35821 6.31047C3.39415 6.33255 3.4301 6.35094 3.49839 6.39141C3.47683 6.03457 3.45885 5.71084 3.44088 5.38343C3.4301 5.22892 3.41572 5.07809 3.41213 4.92358C3.40494 4.51892 3.69249 4.19519 4.07351 4.17679C4.47249 4.1584 4.7924 4.44534 4.82115 4.85736C4.87507 5.60783 4.92899 6.36198 4.97572 7.11244C4.9829 7.23752 5.02963 7.30742 5.13747 7.36628C6.06843 7.91074 6.99221 8.45887 7.91958 9.00701C7.9699 9.03644 8.02022 9.06587 8.09571 9.10633C8.0993 9.0254 8.10649 8.96654 8.10649 8.91136C8.10649 7.81509 8.10289 6.71514 8.11008 5.61887C8.11008 5.48643 8.06695 5.40918 7.95912 5.3356C7.35165 4.9199 6.74419 4.5042 6.14392 4.08115C5.68742 3.76109 5.72336 3.08788 6.20502 2.83405C6.46023 2.70161 6.71543 2.72368 6.95267 2.88555C7.27617 3.10627 7.59967 3.327 7.92317 3.54773C7.9699 3.58083 8.02022 3.61394 8.10649 3.66912C8.10649 3.57348 8.10649 3.50726 8.10649 3.44472C8.10649 2.78254 8.10289 2.12037 8.10649 1.45819C8.11008 0.957879 8.48031 0.62679 8.93321 0.704044C9.24953 0.755547 9.49036 1.02778 9.51552 1.35886C9.51911 1.40669 9.51552 1.45819 9.51552 1.50601C9.51552 7.41778 9.51552 13.3259 9.51552 19.2376C9.51552 19.6349 9.34658 19.9145 9.03745 20.0175C8.56658 20.1794 8.10649 19.8373 8.1029 19.3149C8.0993 18.6454 8.1029 17.9795 8.1029 17.31C8.1029 17.2438 8.1029 17.1812 8.1029 17.0708C7.85128 17.2438 7.63202 17.3909 7.41635 17.5381C7.26179 17.6447 7.11082 17.7514 6.95267 17.8544C6.58963 18.0972 6.16189 18.0236 5.93903 17.6815C5.70899 17.332 5.80604 16.8943 6.17267 16.6404C6.77295 16.2247 7.37322 15.8127 7.9699 15.3933C8.03101 15.3492 8.09571 15.2535 8.09571 15.1836C8.1029 14.0432 8.10289 12.9028 8.0993 11.7624C8.11008 11.7366 8.10649 11.7072 8.0993 11.641Z" fill="#292929"/>
            <path d="M19.1595 5.619C18.9474 5.87652 18.7137 6.11564 18.5268 6.38787C18.2536 6.79253 17.9697 7.20455 17.7648 7.64968C17.4161 8.40383 17.6102 9.11015 18.2501 9.62885C18.8324 10.1034 19.5153 10.3609 20.2198 10.5706C20.3025 10.5964 20.3888 10.6184 20.4211 10.6295C19.8496 10.887 19.2529 11.1482 18.6634 11.4278C18.4873 11.5124 18.3255 11.6411 18.1746 11.7699C17.621 12.2371 17.4485 12.8478 17.6749 13.5504C17.8619 14.139 18.2141 14.6246 18.5987 15.0881C18.7641 15.2868 18.9438 15.4744 19.1487 15.6988C18.8935 15.6473 18.6778 15.5958 18.4585 15.559C17.8906 15.4634 17.3227 15.3861 16.744 15.456C15.9208 15.559 15.3925 16.0777 15.2774 16.9165C15.1696 17.7111 15.3062 18.48 15.5003 19.2415C15.5111 19.2819 15.5183 19.3224 15.5398 19.4033C15.3421 19.2231 15.1768 19.0649 15.0043 18.9177C14.5657 18.5425 14.1128 18.193 13.588 17.9576C12.7649 17.5897 12.0496 17.792 11.5212 18.5388C11.1402 19.0759 10.9066 19.6829 10.7197 20.312C10.7017 20.3672 10.6873 20.426 10.6514 20.4738C10.6514 19.2562 10.6514 18.0422 10.6514 16.8098C12.5744 16.7436 14.156 15.9674 15.3565 14.4296C16.2587 13.2708 16.6901 11.9354 16.6505 10.4529C16.5643 7.06844 13.7965 4.41973 10.6586 4.43812C10.6586 3.16527 10.6586 1.89242 10.6586 0.579102C10.6873 0.656356 10.7053 0.700501 10.7161 0.744646C10.9389 1.46568 11.2013 2.16833 11.6434 2.78268C12.1574 3.49268 12.844 3.68765 13.642 3.34553C14.289 3.06962 14.8245 2.63185 15.3206 2.13522C15.3889 2.06532 15.4572 1.9991 15.5255 1.92921C15.5326 1.92185 15.547 1.92185 15.5614 1.91817C15.4967 2.28605 15.4068 2.65024 15.3781 3.01812C15.3421 3.49268 15.3134 3.9746 15.3601 4.44548C15.4392 5.24377 15.9748 5.75144 16.7584 5.8618C17.5024 5.96481 18.2249 5.84341 18.9438 5.65579C19.0085 5.6374 19.0696 5.62268 19.1343 5.60797C19.1379 5.60797 19.1451 5.61165 19.1595 5.619Z" fill="#292929"/>
            <path d="M10.655 15.5333C10.655 12.2666 10.655 8.99614 10.655 5.69629C12.3624 5.77722 13.7427 6.47986 14.6521 7.95505C15.752 9.73925 15.7268 11.5749 14.6233 13.3555C13.5594 15.0624 11.701 15.6069 10.655 15.5333Z" fill="#292929"/>
            </svg>
          </div>}

        <div className={`services__item ${activeDirection.servicesObj?.wifi ? 'services__item-active' : ''}`} onClick={clickWifi}>
          <div className="services__item-tooltip">WI-FI</div>
          {/* <img src={wifiIcon} alt="services__icon" /> */}
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.4737 4.46617C19.2528 4.67493 19.0318 4.88369 18.8171 5.09878C18.6024 5.31387 18.4004 5.54161 18.1731 5.78833C15.8686 3.5552 13.16 2.37854 9.99058 2.37854C6.83374 2.37854 4.13779 3.5552 1.89644 5.72507C1.44817 5.28224 1.01883 4.85206 0.526367 4.35862C1.20825 3.82723 1.87118 3.22624 2.60988 2.73281C7.86918 -0.759218 14.6501 -0.151909 19.2338 4.20047C19.3096 4.27006 19.3917 4.33332 19.4737 4.39658C19.4737 4.42188 19.4737 4.44086 19.4737 4.46617Z" fill="#292929"/>
          <path d="M9.68731 15.4735C9.60524 15.4356 9.52316 15.3913 9.43477 15.3533C8.76551 15.0687 8.39301 14.3665 8.53191 13.6516C8.67081 12.9431 9.29586 12.4307 10.0219 12.4307C10.7417 12.437 11.3668 12.9557 11.4993 13.6643C11.6319 14.3728 11.2468 15.075 10.5712 15.3533C10.4828 15.3913 10.4008 15.4292 10.3124 15.4672C10.104 15.4735 9.89566 15.4735 9.68731 15.4735Z" fill="#292929"/>
          <path d="M4.5606 8.40099C4.11232 7.95816 3.68299 7.53431 3.25366 7.10413C6.51784 3.5615 12.8505 3.09336 16.7397 7.06617C16.304 7.49635 15.8621 7.92653 15.4138 8.36936C13.9364 6.9523 12.1244 6.15521 9.99036 6.16154C7.86265 6.16786 6.05694 6.95863 4.5606 8.40099Z" fill="#292929"/>
          <path d="M14.1069 9.76737C13.6586 10.2102 13.2293 10.6404 12.8 11.0642C11.1142 9.47004 8.68343 9.64085 7.22497 11.0579C6.79564 10.6277 6.36631 10.2039 5.93066 9.7737C7.66061 7.74301 11.6319 7.23059 14.1069 9.76737Z" fill="#292929"/>
          </svg>

        </div>
{       coach.class_type !== 'fourth' &&
          <div onClick={clickLinens}
           className={`services__item
           ${activeDirection.servicesObj?.linens ? 'services__item-active' : ''}
           ${coach.is_linens_included ? 'services__item-included' : ''}`}>
          <div className='services__item-tooltip'>Бельё</div>
          {/* <img src={linensIcon} alt="services__icon" /> */}
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.545 12.1613C20.6815 12.5772 20.8553 13.1645 21.0538 13.7395C21.3641 14.6815 20.7312 15.6235 19.7259 15.6235C14.4764 15.6357 9.21447 15.6357 3.96494 15.6113C2.19028 15.599 0.936843 14.7304 0.651408 13.2256C0.514895 12.5283 0.589357 11.7575 0.725869 11.0602C1.17264 8.68681 1.69387 6.32564 2.20269 3.95225C2.28956 3.53629 2.42607 3.12033 2.61222 2.74108C2.99694 1.9581 3.56781 1.43204 4.5234 1.28523C5.33007 1.16289 6.11191 0.857043 6.89375 0.600129C7.39016 0.428853 7.84934 0.404385 8.30852 0.698001C9.15242 1.24853 10.0708 1.38311 11.076 1.35864C13.3098 1.3097 15.5437 1.3464 17.7775 1.35864C18.5718 1.35864 18.5718 1.37087 18.7952 2.10491C19.0806 3.08363 19.3536 4.06235 19.6515 5.04107C19.7259 5.26129 19.8873 5.45703 20.0238 5.65277C20.334 6.08096 20.7436 6.44798 20.9421 6.91288C21.4758 8.13628 21.4882 9.45755 21.3393 10.7666C21.2896 11.1948 20.8925 11.574 20.545 12.1613ZM1.63182 10.1794C2.72392 9.33521 3.87807 9.27404 5.06945 9.28627C9.78534 9.29851 14.5012 9.28627 19.2047 9.29851C19.6639 9.29851 20.1355 9.35968 20.7312 9.39638C20.6195 8.72351 20.5574 8.09958 20.3961 7.50011C20.0486 6.20331 19.1923 5.70171 17.8644 6.03203C16.946 6.26448 16.0153 6.50916 15.1714 6.90064C12.6521 8.06287 10.0335 7.87936 7.40257 7.54905C7.11714 7.51234 7.00545 7.36554 7.04268 7.09639C7.07991 6.79054 7.11714 6.49692 7.14196 6.19107C7.21642 5.11448 7.30329 4.03789 7.36534 2.96129C7.39016 2.423 7.36534 1.87247 7.36534 1.24853C7.10473 1.33417 6.89375 1.39534 6.68278 1.45651C5.96299 1.65225 5.2556 1.8847 4.53581 2.03151C3.95253 2.14161 3.54299 2.43523 3.31961 2.94906C3.14586 3.34055 3.00935 3.74427 2.91007 4.16023C2.72392 4.9065 2.5874 5.66501 2.42607 6.42352C2.17787 7.63468 1.91725 8.83362 1.63182 10.1794ZM11.6593 14.9139C14.2034 14.9139 16.7475 14.9139 19.2916 14.9139C19.4529 14.9139 19.6267 14.9262 19.788 14.9017C20.1479 14.8527 20.4457 14.498 20.3961 14.1676C20.3464 13.8251 20.1355 13.6293 19.7632 13.6416C19.6018 13.6416 19.4281 13.6416 19.2668 13.6416C14.4888 13.6538 9.71088 13.666 4.93294 13.666C4.6475 13.666 4.34966 13.6905 4.06422 13.6538C3.46853 13.5926 3.03417 13.0788 3.04658 12.4671C3.05899 11.8799 3.4313 11.4884 4.05181 11.4517C4.68473 11.415 5.33007 11.3783 5.9754 11.3661C10.5424 11.3171 15.1093 11.2804 19.6763 11.2315C19.7756 11.2315 19.8873 11.2315 19.9865 11.2192C20.3464 11.1825 20.6443 10.9012 20.6567 10.6075C20.6567 10.2161 20.3713 10.0937 20.061 10.0081C19.9245 9.97138 19.7756 9.97138 19.6267 9.97138C14.4392 9.97138 9.23929 9.95915 4.05181 9.99585C3.51817 9.99585 2.9473 10.1916 2.47571 10.4485C0.998894 11.2682 0.874792 13.4091 2.20269 14.3634C2.74874 14.7549 3.40648 14.8772 4.07663 14.8772C6.60832 14.9139 9.14001 14.9139 11.6593 14.9139ZM8.14719 1.46874C8.0355 3.32831 7.9238 5.09001 7.81211 6.81501C11.1629 7.54905 14.191 6.79054 17.0826 5.37139C14.0172 4.45384 11.2001 2.85119 8.14719 1.46874ZM19.7135 11.9655C19.4529 11.9655 19.2295 11.9655 18.9937 11.9655C17.1322 11.99 15.2707 12.0389 13.4091 12.0512C10.5424 12.0756 7.6756 12.0756 4.79643 12.1001C4.54822 12.1001 4.28761 12.1001 4.06422 12.1857C3.94012 12.2347 3.77879 12.4426 3.7912 12.565C3.80361 12.6996 3.96494 12.8708 4.10145 12.9442C4.21314 13.0054 4.38689 12.9687 4.5234 12.9687C9.52472 12.9565 14.5385 12.9565 19.5398 12.9442C19.6887 12.9442 19.8376 12.9075 20.0114 12.8953C19.9493 12.6873 19.9121 12.5283 19.8624 12.3692C19.8252 12.2469 19.7756 12.1368 19.7135 11.9655ZM11.3242 2.06821C11.3118 2.10491 11.3118 2.15385 11.2994 2.19055C13.7318 3.35278 16.1518 4.53948 18.9193 5.11448C18.6462 4.14799 18.4104 3.24267 18.1126 2.36183C18.063 2.21502 17.7651 2.08044 17.579 2.08044C15.494 2.06821 13.4091 2.06821 11.3242 2.06821Z" fill="#292929"/>
          </svg>

        </div>}
      </div>
    
    </>
  )
}

export default SelectSeatsContainer2;