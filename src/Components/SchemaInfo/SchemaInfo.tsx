import { FC, useState } from 'react';
import { ISchemaProps, ISchemaType } from './SchemaTypes';
import SchemaField from './SchemaField';
import styles from './SchemaInfo.module.css';

const SchemaInfo: FC<ISchemaProps> = ({ types }) => {
  const [selectedType, setSelectedType] = useState<ISchemaType | null>(null);

  const handleTypeClick = (type: ISchemaType) => {
    setSelectedType(type);
  };

  return (
    <div className={styles.schemaInformation}>
      <div>
        <h2 className={styles.titleSchema}>Queries</h2>
        {types?.map((type) => (
          <div
            className={styles.containerTypes}
            key={type.name}
            onClick={() => handleTypeClick(type)}
          >
            {type.name}: <p className={styles.kind}>{type.kind}</p>
          </div>
        ))}
      </div>
      {selectedType && (
        <SchemaField
          fields={selectedType.fields || []}
          name={''}
          kind={''}
          description={''}
        />
      )}
    </div>
  );
};

export default SchemaInfo;
