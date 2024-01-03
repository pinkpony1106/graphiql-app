import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SchemaInfo from './SchemaInfo';
import styles from './schemaInfo.module.css';
import Loader from '../Loader/Loader';
import { RootState } from '../../store';
import {
  setError,
  setLoading,
  setSchema,
  setSelectedField,
} from '../../store/slices/schemaSlice';

function Schema() {
  const dispatch = useDispatch();
  const { schema, loading, error, selectedField } = useSelector(
    (state: RootState) => state.schema
  );
  const { url } = useSelector((state: RootState) => state.urlValue);

  useEffect(() => {
    const fetchSchema = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch(url, {
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
          (type: { name: string; kind: string }) =>
            !type.name.startsWith('__') &&
            !excludedKinds.includes(type.kind) &&
            !excludedNames.includes(type.name)
        );
        dispatch(setSchema(filteredSchema));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setError(error.message));
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchSchema();
  }, [dispatch, url]);

  const handleFieldClick = (fieldName: string) => {
    dispatch(setSelectedField(fieldName === selectedField ? null : fieldName));
  };

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.schemaContainer}>
      <h2 className={styles.title}>Docs</h2>
      <SchemaInfo
        types={schema || []}
        selectedField={selectedField}
        onFieldClick={handleFieldClick}
      />
    </div>
  );
}

export default Schema;
