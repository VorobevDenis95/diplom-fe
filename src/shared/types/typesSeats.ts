export interface SeatsRequestProps {
coach: CoachSeatsRequestProps,
seats: {
  index: number;
  avaliable: boolean;
}[] // - информация о посадочных местах
}

export interface CoachSeatsRequestProps {
  _id: string // - Идентификатор
name: string // - Идентификатор
class_type: string // - Идентификатор
have_first_class: boolean // - Люкс (true/false)
have_second_class: boolean // - Купе (true/false)
have_third_class: boolean // - Плацкарт (true/false)
have_fourth_class: boolean // - Сидячее место (true/false)
have_wifi: boolean // - Имеется WiFi (true/false)
have_air_conditioning: boolean // - Имеется кондиционер (true/false)
have_express: boolean // - Экспресс (true/false)
price: number // - Цена за место (Люкс)
top_price: number // - Цена верхнего места
bottom_price: number // - Цена нижнего места
side_price: number // - Цена бокового места
linens_price: number // - Цена постельного белья
wifi_price: number // - Цена услуги Wi-Fi
available_seats: number // - Количество свободных мест в вагоне
is_linens_included: boolean // - Стоимость белья включена в стоимость билета и не может быть исключена (true/false)
}