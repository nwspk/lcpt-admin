
import React from 'react';
import { List, Create, Datagrid, TextField, EmailField, DateField, BooleanField, Edit, SimpleForm, TextInput, DateInput, BooleanInput, ReferenceInput, ReferenceField, SelectInput, Filter } from 'react-admin';

const UserTitle = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="user" alwaysOn />
    </Filter>
);


export const UserList = props => (
    <List {...props} title={<UserTitle />} filters={<UserFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phoneNumber" />
            <EmailField source="email" />
            <TextField source="bio" />
            <ReferenceField source="campus.id" reference="campus" label='Campus'>
                <TextField source="name" />
            </ReferenceField>
            <TextField source="stripeSubId" />
            <BooleanField source="isMember" />
            <BooleanField source="isFellow" />
            <DateField source="receivedFellowshipAt" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props} title={<UserTitle />}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="phoneNumber" />
            <TextInput source="email" />
            <TextInput multiline source="bio" />
            <ReferenceInput source="campus.id" reference="campus" label='Campus'>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="stripeSubId" />
            <BooleanInput source="isMember" />
            <BooleanInput source="isFellow" />
            <DateInput source="receivedFellowshipAt" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props} title={<UserTitle />}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="phoneNumber" />
            <TextInput source="email" />
            <TextInput multiline source="bio" />
            <BooleanInput source="isMember" />
            <BooleanInput source="isFellow" />
        </SimpleForm>
    </Create>
);
