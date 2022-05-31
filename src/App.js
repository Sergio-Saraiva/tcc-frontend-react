import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import { DocentesList, DocentesEdit, DocentesCreate } from './components/Docentes';
import { DiscentesList, DiscentesEdit, DiscentesCreate } from './components/Discentes';
import { TaesList, TaesEdit, TaesCreate } from './components/Taes';
import { AdminsList, AdminsEdit, AdminsCreate } from './components/Admin';
import { SecretariasList, SecretariasEdit, SecretariasCreate } from './components/Secretarias';
// import { ComissaoList, ComissaoEdit, ComissaoCreate } from './components/Comissao';
import { DisciplinasList, DisciplinasEdit, DisciplinasCreate } from './components/Disciplinas';
import { DisciplinaHasDocentesList, DisciplinaHasDocentesEdit, DisciplinaHasDocentesCreate } from './components/DisciplinaHasDocentes';
import { DisciplinaHasDiscentesList, DisciplinaHasDiscentesEdit, DisciplinaHasDiscentesCreate } from './components/DisciplinaHasDiscentes';
import { OrientacaoList, OrientacaoEdit, OrientacaoCreate } from './components/Orientacao';
import { TemasList, TemasEdit, TemasCreate } from './components/Temas';
import { FichasList, FichasEdit, FichasCreate } from './components/Fichas';
import { PerguntasList, PerguntasEdit, PerguntasCreate } from './components/Perguntas';
import { OpcoesList, OpcoesEdit, OpcoesCreate } from './components/Opcoes';
import { BancaList, BancaCreate } from './components/Banca';
import { RespostasList } from './components/Respostas';
import { Group, LocationCity, Person, MenuBook, Directions, Face, Assignment, Palette, QuestionAnswer, CallSplit, AssignmentTurnedIn } from '@material-ui/icons';
import ptBrMessages from 'ra-language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  'pt-br': ptBrMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br');

const App = () => (
  <Admin i18nProvider={i18nProvider} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="admin" list={AdminsList} edit={AdminsEdit} create={AdminsCreate} icon={Person} />
    <Resource name="docentes" list={DocentesList} edit={DocentesEdit} create={DocentesCreate} icon={Group} />
    <Resource name="discentes" list={DiscentesList} edit={DiscentesEdit} create={DiscentesCreate} icon={Group} />
    <Resource name="taes" options={{ label: 'Técnico Adm' }} list={TaesList} edit={TaesEdit} create={TaesCreate} icon={Group} />
    <Resource name="secretarias" list={SecretariasList} edit={SecretariasEdit} create={SecretariasCreate} icon={LocationCity} />
    <Resource name="disciplinas" list={DisciplinasList} edit={DisciplinasEdit} create={DisciplinasCreate} icon={MenuBook} />
    <Resource name="disciplinaHasDocentes" options={{ label: 'Associar docentes' }} list={DisciplinaHasDocentesList} edit={DisciplinaHasDocentesEdit} create={DisciplinaHasDocentesCreate} icon={MenuBook} />
    <Resource name="disciplinaHasDiscentes" options={{ label: 'Associar discentes' }} list={DisciplinaHasDiscentesList} edit={DisciplinaHasDiscentesEdit} create={DisciplinaHasDiscentesCreate} icon={MenuBook} />
    {/* <Resource name="comissao" options={{ label: 'Comissão Avaliadora' }} list={ComissaoList} edit={ComissaoEdit} create={ComissaoCreate} icon={Group} /> */}
    <Resource name="orientacao" options={{ label: 'Orientação' }} list={OrientacaoList} edit={OrientacaoEdit} create={OrientacaoCreate} icon={Directions} />
    <Resource name="banca" options={{ label: 'Banca Avaliadora' }} list={BancaList} create={BancaCreate} icon={Face} />
    <Resource name="temas" options={{ label: 'Temática' }} list={TemasList} edit={TemasEdit} create={TemasCreate} icon={Palette} />
    <Resource name="fichas" list={FichasList} edit={FichasEdit} create={FichasCreate} icon={Assignment} />
    <Resource name="perguntas" list={PerguntasList} edit={PerguntasEdit} create={PerguntasCreate} icon={QuestionAnswer} />
    <Resource name="opcoes" options={{ label: 'Opções' }} list={OpcoesList} edit={OpcoesEdit} create={OpcoesCreate} icon={CallSplit} />
    <Resource name="respostas" options={{ label: 'Respostas' }} list={RespostasList} icon={AssignmentTurnedIn} />

  </Admin>
);

export default App;