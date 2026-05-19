export type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  employeeCount: string;
  preferredDate: string;
  location: string;
  details: string;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;
