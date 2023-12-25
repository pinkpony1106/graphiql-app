import { FC } from 'react';
import { ISchemaField, ISchemaType } from './SchemaTypes';
import styles from './SchemaInfo.module.css';

interface ISchemaFieldDetailProps {
  type: ISchemaType | null;
}

const SchemaFieldDetail: FC<ISchemaFieldDetailProps> = ({ type }) => {
  return (
    <>
      {type && (
        <div>
          {type.description && (
            <div>
              <h2 className={styles.titleSchema}>Description</h2>
              <p className={styles.description}>{type.description}</p>
            </div>
          )}
          <div className={styles.typeContainer}>
            {type.kind}
            <p className={styles.kind}>{type.name}</p>
          </div>
          {type.fields && type.fields.length > 0 && (
            <div>
              <h2 className={styles.titleSchema}>Fields</h2>
              <ul>
                {type.fields.map((field: ISchemaField) => (
                  <li key={field.name} className={styles.fieldItem}>
                    {field.name}: {field.type.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SchemaFieldDetail;
