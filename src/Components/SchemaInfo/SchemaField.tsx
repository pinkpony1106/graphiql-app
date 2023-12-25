import { FC, useState } from 'react';
import { ISchemaField, ISchemaType } from './SchemaTypes';
import SchemaFieldDetail from './SchemaFieldDetail';
import styles from './SchemaInfo.module.css';

const SchemaField: FC<ISchemaType> = ({ fields }) => {
  const [selectedField, setSelectedField] = useState<ISchemaField | null>(null);

  const handleFieldClick = (field: ISchemaField) => {
    setSelectedField(field);
  };

  return (
    <div className={styles.detailContainer}>
      <div className={styles.typeDetailed}>
        <h2 className={styles.titleSchema}>Type Detailed</h2>
        {fields?.map((field) => (
          <div
            className={styles.typeContainer}
            key={field.name}
            onClick={() => handleFieldClick(field)}
          >
            {field.name}(...): <p className={styles.kind}>{field.type.name}</p>
          </div>
        ))}
      </div>
      {selectedField && <SchemaFieldDetail type={selectedField.type} />}
    </div>
  );
};

export default SchemaField;
