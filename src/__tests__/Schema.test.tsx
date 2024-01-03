import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schema from '../Components/SchemaInfo/Schema';
import schemaReducer from '../store/slices/schemaSlice';
import urlValueReducer from '../store/slices/urlSlice';
import fetchMock from 'jest-fetch-mock';
import SchemaInfo from '../Components/SchemaInfo/SchemaInfo';
import SchemaField from '../Components/SchemaInfo/SchemaField';
import SchemaFieldDetail from '../Components/SchemaInfo/SchemaFieldDetail';

describe('Schema component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should render "Docs" title', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { __schema: { types: [] } } })
    );

    const store = configureStore({
      reducer: {
        schema: schemaReducer,
        urlValue: urlValueReducer,
      },
      preloadedState: {
        schema: {
          schema: [],
          loading: false,
          error: null,
          selectedField: null,
        },
        urlValue: {
          url: 'https://rickandmortyapi.com/graphql',
        },
      },
    });

    render(
      <Provider store={store}>
        <Schema />
      </Provider>
    );

    await screen.findByText('Docs');

    const titleElement = screen.getByText('Docs');
    expect(titleElement).toBeInTheDocument();
  });
});

describe('SchemaInfo component', () => {
  it('should render with the title "Queries"', () => {
    const mockTypes = [
      { name: 'Character', kind: 'OBJECT', fields: [] },
      { name: 'Film', kind: 'OBJECT', fields: [] },
    ];

    render(
      <SchemaInfo
        types={mockTypes}
        selectedField={null}
        onFieldClick={() => {}}
      />
    );

    const titleElement = screen.getByText('Queries');
    expect(titleElement).toBeInTheDocument();

    const clickableField = screen.getByText(mockTypes[0].name, {
      exact: false,
    });
    fireEvent.click(clickableField);
  });
});

describe('SchemaField component', () => {
  it('should render with fields and handle field click', () => {
    const mockFields = [
      {
        name: 'character',
        type: {
          name: 'String',
          kind: 'SCALAR',
          description: 'String Description',
        },
      },
      {
        name: 'Film',
        type: {
          name: 'String',
          kind: 'SCALAR',
          description: 'String Description',
        },
      },
    ];

    render(
      <SchemaField
        fields={mockFields}
        activeFieldIndex={null}
        setActiveFieldIndex={() => {}}
        name={''}
        kind={''}
        description={''}
      />
    );

    const titleElement = screen.getByText('Type Detailed');
    expect(titleElement).toBeInTheDocument();

    const clickableField = screen.getByText(mockFields[0].name, {
      exact: false,
    });
    fireEvent.click(clickableField);
  });
});

describe('SchemaFieldDetail component', () => {
  it('should render with type details', () => {
    const mockType = {
      name: 'MockType',
      kind: 'OBJECT',
      description: 'Mock Type Description',
      fields: [
        {
          name: 'character',
          type: {
            name: 'String',
            kind: 'SCALAR',
            description: 'String Description',
          },
        },
        {
          name: 'Film',
          type: {
            name: 'String',
            kind: 'SCALAR',
            description: 'String Description',
          },
        },
      ],
    };

    render(<SchemaFieldDetail type={mockType} />);

    const descriptionTitle = screen.getByText('Description');
    expect(descriptionTitle).toBeInTheDocument();

    const descriptionText = screen.getByText(mockType.description || '');
    expect(descriptionText).toBeInTheDocument();

    const fieldsTitle = screen.getByText('Fields');
    expect(fieldsTitle).toBeInTheDocument();

    mockType.fields.forEach((field) => {
      const fieldText = screen.getByText(`${field.name}: ${field.type.name}`);
      expect(fieldText).toBeInTheDocument();
    });
  });

  it('should not render when type is null', () => {
    render(<SchemaFieldDetail type={null} />);

    const allText = screen.queryByText(/.+/);
    expect(allText).not.toBeInTheDocument();
  });
});
