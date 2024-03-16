// input cities props
export interface CitiesProps {
  list: CityProps[]
}

export interface CityProps {
  id: string,
  name: string
}

export interface InputProps {
  nameClass: string;
  placeholder?: string;
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
  coordinates: CoordinatesProps;
  onChange: (value: Date) => void;
  onClickDate: (value: boolean) => void;

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

export interface StateHeader {
  state? : 'home' | 'main' | 'order'
}