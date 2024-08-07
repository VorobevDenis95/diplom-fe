// input cities props
export interface CitiesProps {
  list: CityProps[]
}

export interface CityProps {
  _id?: string;
  id: string,
  name: string
}

export interface InputProps {
  nameClass: string;
  placeholder?: string;
  // onBlur?: () => void;
}

export interface CoordinatesProps {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface CoordinatesProps {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface InputProps {
  nameClass: string;
  placeholder?: string;
}


export interface DatePickerProps {
  value: Date;
  // coordinates: CoordinatesProps;
  onChange: (value: Date) => void;
  onClickDate: (value: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement>

  timeout?: number;
  min?: Date;
  max?: Date;
}

export interface DateCellItem {
  day: number,
  month:number,
  year: number,
  hidden?: boolean;

  dayOfWeek?: number,

  isToday?: boolean,
  isSelected?: boolean,
}

export interface ContainerWorkProps {
  src: string,
  title: string
}

export interface StateHeader {
  state? : 'home' | 'main' | 'order'
}

export type PaymentCheckboxType = 'Онлайн' | 'Наличными' | 'Не выбрано'; 
