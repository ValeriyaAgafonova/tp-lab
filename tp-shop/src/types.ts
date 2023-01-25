export interface ICard {
    image_url: string;
    logo_url: string;
    name: string;
    category: string;
    views: number;
    start_date: string;
    end_date: string;
    discount: string;
    stars: number;
    old_price: string;
    new_price: string;
    disclaimer?: string;
  }
  
 export interface IData {
    isLoading: boolean;
    hasError: boolean;
    data: ICard[];
  }