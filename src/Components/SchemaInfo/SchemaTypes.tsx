export interface ISchemaType {
  name: string;
  kind: string;
  fields?: ISchemaField[];
  description?: string;
}

export interface ISchemaField {
  name: string;
  type: {
    name: string;
    kind: string;
  };
}

export interface ISchemaFieldProps {
  data: ISchemaField[];
  onFieldClick: (item: ISchemaField) => void;
}

export interface ISchemaFieldDetailed {
  field?: ISchemaField;
  type: ISchemaType;
  onFieldClick: (item: ISchemaField) => void;
}

export interface ISchemaProps {
  types: ISchemaType[] | null;
}
