import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  DeleteButton,
  SelectInput,
  ReferenceField,
  ReferenceInput,
  ArrayInput,
  SimpleFormIterator,
  useRedirect,
  useNotify,
  useRefresh,
  required,
  BooleanInput
} from 'react-admin';
import { Divider } from '@material-ui/core';
import { NameFilter } from './Filters/NameFilter';

export const FichasList = props => (
  <List filters={<NameFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="tema_id" reference="temas">
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Ficha" source="name" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const FichasEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceInput label="Tema" source="tema_id" reference="temas">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
export const FichasCreate = props => {
  // const [isSubjective, setIsSubjective] = React.useState(false)
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify(`Fichas Criadas`)
    redirect('/fichas');
    refresh();
  };
  const onFailure = (error) => {
    if (error.message === 'ra.notification.data_provider_error') {
      console.log('aki')
      notify(`Fichas Criadas`)
      redirect('/fichas');
      refresh();
    } else {
      notify(`Não foi possivel criar a(s) ficha(s): ${error.message}`)
      redirect('/fichas');
      refresh();
    }


  };
  return (
    <Create onSuccess={onSuccess} onFailure={onFailure} title="Fluxo criar Fichas" {...props}>
      <SimpleForm>
        {/* temas */}
        {/* <RadioButtonGroupInput source="selecione" choices={[
          { id: 1, name: 'Criar tema' },
          { id: 2, name: 'Tema Existente' },
        ]} parse={(value, name) => { setIsCreateTemas(value); return value }} defaultValue={1} />
        {isCreateTemas === 1 ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextInput source="name" />
            <SelectInput label="Tipo de acesso" source="type_access" choices={[
              { id: 'do', name: 'Docentes' },
              { id: 'di', name: 'Discentes' },
              { id: 't', name: 'Taes' },
              { id: 'all', name: 'Todos' },
              { id: 'dodi', name: 'Docentes e Discentes' },
              { id: 'dot', name: 'Docentes e Taes' },
              { id: 'dit', name: 'Discentes e Taes' },
            ]} />
          </div>
        ) :
          (
            <ReferenceInput label="Selecione um tema existente" source="tema_id" reference="temas">
              <SelectInput optionText="name" />
            </ReferenceInput>
          )
        } */}
        <ReferenceInput label="Selecione um tema existente" source="tema_id" reference="temas">
          <SelectInput optionText="name" validate={[required()]} />
        </ReferenceInput>
        <Divider />
        <ArrayInput label="Fichas" source="fichas" validate={[required()]}>
          <SimpleFormIterator >
            {/* fichas */}
            <TextInput label="Qual o nome da Ficha?" source="name" validate={[required()]} />
            <Divider />
            <ArrayInput label="Perguntas" source="perguntas" validate={[required()]}>
              <SimpleFormIterator>
                {/* perguntas */}
                <BooleanInput label="É uma pergunta subjetiva?" source="isSubject" />
                <TextInput label="Pergunta" source="pergunta" validate={[required()]} />

                <Divider />
                (<span style={{
                  fontSize: '1rem',
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  letterSpacing: '0.00938em'
                }}>Caso seja uma pergunta subjetiva deixe as opções em branco.</span>)
                <ArrayInput label="Opções" source="opcoes" validate={[required()]}>
                  <SimpleFormIterator>
                    {/* opçoes */}
                    <TextInput label="Opção" source="name" validate={[required()]} />
                  </SimpleFormIterator>
                </ArrayInput>
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}