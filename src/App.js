import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './user';
import simpleRestProvider from 'ra-data-simple-rest'
import authProvider from './authProvider';
import LoginPage from './LoginPage';
import { CampusList } from './campus';
import config from './config';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
    options.credentials = 'include';
  }
  // add your own headers here
  options.headers.set(
    'Authorization',
    `Bearer ${window.localStorage.getItem('access_token')}`
  )
  return fetchUtils.fetchJson(url, options)
}

const dataProvider = simpleRestProvider(config.api, httpClient)
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
    {user => [
      <Resource name="campus" list={CampusList} edit={EditGuesser} />,
      <Resource name="user" list={UserList} edit={UserEdit} create={user.isAdmin ? UserCreate : null} />,
    ]}
  </Admin>
);

export default App;