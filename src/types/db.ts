export type experienceType = Array<{
  description: string;
  period: string;
  company_name: string;
}>;

export type toolBoxItemType = {
  name: string;
  link: string;
  image?: string;
};

export type toolBoxType = Array<toolBoxItemType>;

export type ridesType = {
  start_location: string;
  start_date: string;
  end_date: string;
  total_distance: number;
  cover_photo?: string;
  type: "offroad" | "endurance" | "travel";
  destination: string;
};

export type rideListType = Array<ridesType>;
