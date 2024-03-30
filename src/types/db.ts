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
