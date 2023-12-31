import { FC } from 'react';
import { ISchemaFieldProps } from './SchemaTypes';
import SchemaFieldDetail from './SchemaFieldDetail';
import styles from './SchemaInfo.module.css';

const SchemaField: FC<ISchemaFieldProps> = ({
  fields,
  activeFieldIndex,
  setActiveFieldIndex,
}) => {
  const handleFieldClick = (index: number) => {
    setActiveFieldIndex(activeFieldIndex === index ? null : index);
  };

  return (
    <div className={styles.detailContainer}>
      <div className={styles.typeDetailed}>
        <h2 className={styles.titleSchema}>Type Detailed</h2>
        {fields?.map((field, index) => (
          <div
            className={`${styles.typeContainer} ${
              activeFieldIndex === index ? styles.active : ''
            }`}
            key={field.name}
            onClick={() => handleFieldClick(index)}
          >
            {field.name}(...): <p className={styles.kind}>{field.type.name}</p>
          </div>
        ))}
      </div>
      {activeFieldIndex !== null && (
        <SchemaFieldDetail type={fields[activeFieldIndex].type} />
      )}
    </div>
  );
};

export default SchemaField;
