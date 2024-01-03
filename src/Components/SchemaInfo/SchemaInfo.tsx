import { FC, useState } from 'react';
import { ISchemaProps, ISchemaType } from './SchemaTypes';
import SchemaField from './SchemaField';
import styles from './SchemaInfo.module.css';

interface ISchemaInfoProps extends ISchemaProps {
  selectedField: string | null;
  onFieldClick: (fieldName: string) => void;
}

const SchemaInfo: FC<ISchemaInfoProps> = ({
  types,
  selectedField,
  onFieldClick,
}) => {
  const [selectedType, setSelectedType] = useState<ISchemaType | null>(null);
  const [activeFieldIndex, setActiveFieldIndex] = useState<number | null>(null);

  const handleTypeClick = (type: ISchemaType) => {
    setSelectedType(type);
    setActiveFieldIndex(null);
    onFieldClick(type.name);
  };

  return (
    <div className={styles.schemaInformation}>
      <div>
        <h2 className={styles.titleSchema}>Queries</h2>
        {types?.map((type) => (
          <div
            className={`${styles.containerTypes} ${
              selectedField === type.name ? styles.active : ''
            }`}
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
          activeFieldIndex={activeFieldIndex}
          setActiveFieldIndex={setActiveFieldIndex}
        />
      )}
    </div>
  );
};

export default SchemaInfo;
