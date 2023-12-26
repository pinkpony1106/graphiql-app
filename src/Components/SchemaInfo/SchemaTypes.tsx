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
  fields: ISchemaField[];
  name: string;
  kind: string;
  description: string;
  activeFieldIndex: number | null;
  setActiveFieldIndex: (index: number | null) => void;
}

export interface ISchemaProps {
  types: ISchemaType[] | null;
}
