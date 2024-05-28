import { ChangeEvent } from "react";
import { EmailPhoneInput } from "../../../components/Passengers/PhoneContainer/PhoneContainer";
import { PaymentMethodType } from "../../../pages/Payment/Payment";
import { CityProps } from "../types";
import { ItemRoutes } from "../typesRoutesBilets";
import { InputType } from "../../../components/Passengers/InputContainer/InputPassenger";

interface СhildrenContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface DateInputProps {
  nameClass: string;
  data?: string;
}

interface DirectTImeContainerProps {
  src: string;
  title: string;
}


interface SliderContainerProps {
  time?: boolean; 
  min: number;
  max: number;
  value: {
    min: number;
    max: number;
  };
  step: number;
  onChange: (objMinMax: {
    min: number;
    max: number;
  }) => void;
}
interface TitleContainerProps {
  title: string
}

interface DropListProps {
  list: CityProps[],
  handleClick: (el: CityProps) => void,
  isActive: boolean
}

interface LastTicketsContainerProps {
  list: ItemRoutes[];
}

interface NextButtonProps{
  active: boolean;
  clickAction: () => void;
  title: string;
  type: 'button' | 'submit';
}

interface CertificateInputProps {
  changeInputCertificateNumber: (text: string) => void;
  value: string;
}

interface WrapperContainerProps {
  children: React.ReactNode;
  title: string,
  classname?: string,
}

interface PaymentMethodContainerProps {
  onChangeRadio: (value: PaymentMethodType) => void;
}

interface PersonalDataProps {
  handleInputFullName: (type: InputType | EmailPhoneInput, e: ChangeEvent<HTMLInputElement>) => void;
  firstNameValue: string;
  lastNameValue: string;
  patronymicValue: string;
  phoneValue: string;
  emailValue: string;
}
interface PoginationItemElementProps {
  numberPage: string | number ;
  currentPage?: number;
  clickPage: (num: number | string) => void;
}
interface ReviewsProps {
  src: string;
  name: string;
  text: string;
}

export type {
  DateInputProps,
  СhildrenContainerProps,
  DirectTImeContainerProps,
  SliderContainerProps,
  TitleContainerProps,
  DropListProps,
  LastTicketsContainerProps,
  NextButtonProps,
  CertificateInputProps,
  WrapperContainerProps,
  PaymentMethodContainerProps,
  PersonalDataProps,
  PoginationItemElementProps,
  ReviewsProps
}