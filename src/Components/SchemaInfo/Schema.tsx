import { useEffect, useState } from 'react';
import SchemaInfo from './SchemaInfo';
import { ISchemaType } from './SchemaTypes';
import styles from './schemaInfo.module.css';
import Loader from '../Loader/Loader';

function Schema() {
  const [schema, setSchema] = useState<ISchemaType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            {
              __schema {
                types {
                  name
                  kind
                  fields {
                    name
                    type {
                      name
                      kind
                      description
                    }
                  }
                }
              }
            }
            `,
          }),
        });

        const result = await response.json();
        const excludedKinds = ['SCALAR', 'INPUT_OBJECT', 'ENUM'];
        const excludedNames = ['Query', 'Root'];
        const filteredSchema = result.data.__schema.types.filter(
          (type: ISchemaType) =>
            !type.name.startsWith('__') &&
            !excludedKinds.includes(type.kind) &&
            !excludedNames.includes(type.name)
        );
        setSchema(filteredSchema);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSchema();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={styles.responseContainer}>
      <h2 className={styles.title}>Docs</h2>
      <SchemaInfo types={schema || []} />
    </div>
  );
}

export default Schema;
