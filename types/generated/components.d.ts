import type { Schema, Attribute } from '@strapi/strapi';

export interface HotelPrice extends Schema.Component {
  collectionName: 'components_hotel_prices';
  info: {
    displayName: 'Price';
    icon: 'priceTag';
  };
  attributes: {
    price: Attribute.Decimal;
  };
}

export interface HotelRoom extends Schema.Component {
  collectionName: 'components_hotel_rooms';
  info: {
    displayName: 'room';
    icon: 'connector';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media;
    bed_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    bed_types: Attribute.Relation<
      'hotel.room',
      'oneToMany',
      'api::hotel-bed-type.hotel-bed-type'
    >;
    room_type: Attribute.Relation<
      'hotel.room',
      'oneToOne',
      'api::hotel-room-type.hotel-room-type'
    >;
    price: Attribute.Component<'hotel.price'>;
    facilities: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hotel.price': HotelPrice;
      'hotel.room': HotelRoom;
    }
  }
}
