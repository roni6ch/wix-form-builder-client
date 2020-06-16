export interface IFormBuilder {
  title: string;
  dynamicInputs: IFormData[];
  submissions: [ISubmissions[]];
}

export interface ISubmissions {
  name: string;
  value: string[];
}
export interface IFormData {
  name: string;
  type: string;
  label: string;
}
