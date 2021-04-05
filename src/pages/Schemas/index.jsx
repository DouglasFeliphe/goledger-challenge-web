import { useState, useEffect } from 'react';
import api from '../../services/api';
import Main from '../../components/Main';
import Table from '../../components/Table';
import TableAction from '../../components/TableAction';
import Button from '../../components/Button';

function Schemas() {

    const [schemas, setSchemas] = useState([]);
    const [schema, setSchema] = useState('');

    useEffect(() => {
        api.get('/query/getSchema')
            .then(response => {
                console.log(response.data);
                setSchemas(response.data)
            })
    }, []);

    async function handleSearchSchema() {
        const data = {
            assetType: schema
        }

        await api.post('/query/getSchema', data)
            .then(response => {
                alert(JSON.stringify(response.data))

            }).catch(error => {
                alert('asset type named documentHash does not exist')
            })
    }

    async function handleCreateSchema() {
        const data = {
            assetType: "documentHash",
            id: "robots",
            urls: [
                "https://github.com/robots.txt"
            ]
        }

        await api.post('/invoke/createAsset', data)
            .then(response => {
                alert(response.data)
            }).catch((error) => {
                alert('Erro while creating schema.')
            })
    }

    async function handleReadSchema() {
        const data = {
            key: {
                assetType: schema,
                id: "robots"
            }
        }

        await api.post('/query/readAsset', data)
            .then((response) => {
                alert(response.data)
            }).catch((error) => {
                alert('Error while reading schema.')
            })

    }

    async function handleUpdateSchema(schema) {
        await api.post('/invoke/updateAsset', schema)
            .then((response) => {
                alert('updated sucessfully.')
            }).catch((error) => {
                alert('Error while updating schema.');
            });
    }

    async function handleDeleteSchema(schema) {
        await api.delete('/invoke/deleteAsset', schema)
            .then((result) => {
                alert('deleted successfully.')
            }).catch((err) => {
                alert('Error while deleting schema.');
            });
    }

    return (
        <Main>
            <TableAction>
                <Button
                    onClick={() => handleSearchSchema()}>
                    Get schema description
                </Button>
                <Button
                    onClick={() => handleCreateSchema()}>
                    Create schema
                </Button>
                <Button onClick={() => handleReadSchema()}>
                    Read schema
                </Button>

                <input
                    className='form-control rounded mt-3'
                    placeholder='Enter the name of description...'
                    onChange={e => setSchema(e.target.value)}
                    required
                />
            </TableAction>
            <Table title='Schemas'>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Label</th>
                        <th>Description</th>
                        <th>Writers</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {schemas.map((schema, index) => (
                        <tr key={index}>
                            <td>{schema.tag}</td>
                            <td>{schema.label}</td>
                            <td>{schema.description}</td>
                            <td>{schema.writers}</td>
                            <td>
                                <Button
                                    type='warning'
                                    icon='fas fa-edit'
                                    onClick={() => handleUpdateSchema(schema)}
                                >
                                    Update
                                </Button>
                            </td>
                            <td>
                                <Button
                                    type='danger'
                                    icon='fas fa-times'
                                    onClick={() => handleDeleteSchema(schema)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Main >
    )
}

export default Schemas;