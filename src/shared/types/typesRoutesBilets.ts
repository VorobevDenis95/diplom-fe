interface ItemRoutes {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean,
  have_fourth_class: boolean,
  have_wifi: boolean,
  have_air_conditioning: boolean,
  is_express: boolean,
  min_price: number,
  available_seats: number,
  available_seats_info: {
    first: number,
    second: number,
    third: number,
    fourth: number,
  },
  departure: {
    _id: string,
    have_first_class: boolean,
    have_second_class: boolean,
    have_third_class: boolean,
    have_fourth_class: false,
    have_wifi: boolean,
    have_air_conditioning: boolean,
    is_express: boolean,
    min_price: number,
    duration: number,
    available_seats: number,
    available_seats_info: {
      first: number,
      second: number,
      third: number,
      fourth: number,
    },
    train: {
      _id: string,
      name: string
    },
    from: {
      railway_station_name: string,
      city: {
        _id: string,
        name: string
      },
      datetime: number
    },
    to: {
      railway_station_name: string,
      city: {
        _id: string,
        name: string
      },
      datetime: number
    },
    price_info: {
      first: {
        price: number,
        top_price: number,
        bottom_price: number
      },
      second: {
        top_price: number,
        bottom_price: number
      },
      third: {
        top_price: number,
        bottom_price: number,
        side_price: number
      },
      fourth: {
        price: number,
        top_price: number,
        bottom_price: number,
      }

    }
  },
  arrival?: {
    _id: string,
    have_first_class: boolean,
    have_second_class: boolean,
    have_third_class: boolean,
    have_fourth_class: boolean,
    have_wifi: boolean,
    have_air_conditioning: boolean,
    is_express: boolean,
    min_price: number,
    duration: number,
    available_seats: number,
    available_seats_info: {
      second: number
    },
    train: {
      _id: string,
      name: string
    },
    from: {
      railway_station_name: string,
      city: {
        _id: string,
        name: string
      },
      datetime: number
    },
    to: {
      railway_station_name: string,
      city: {
        _id: string,
        name: string
      },
      datetime: number
    },
    price_info: {
      second: {
        top_price: number,
        bottom_price: number
      }
    }
  }
}

interface ResponseRoutes {
  total_count: number;
  items: ItemRoutes[]
}

interface TraineRoutesItemProps {
  item: ItemRoutes;
}

// type TraineRoutesItemProps = Pick<ItemRoutes, 'have_first_class'>;

export interface PathTrain {
  _id: string,
  have_first_class: boolean,
  have_second_class: boolean,
  have_third_class: boolean,
  have_fourth_class: boolean,
  have_wifi: boolean,
  have_air_conditioning: boolean,
  is_express: boolean,
  min_price: number,
  duration: number,
  available_seats: number,
  available_seats_info: {
    second: number
  },
  train: {
    _id: string,
    name: string
  },
  from: {
    railway_station_name: string,
    city: {
      _id: string,
      name: string
    },
    datetime: number
  },
  to: {
    railway_station_name: string,
    city: {
      _id: string,
      name: string
    },
    datetime: number
  },
  price_info: {
    second: {
      top_price: number,
      bottom_price: number
    }
  }
}

export interface RouteRailwayCarriageProps {
  item: PathTrain;
  isNotTime?: boolean;
  typeDirection?: "departure" | "arrival";

}

export const initResponseRoutes :ResponseRoutes = {
  total_count: 0,
  items: [],
}

export type {ItemRoutes, ResponseRoutes, TraineRoutesItemProps};