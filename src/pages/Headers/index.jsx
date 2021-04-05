import { useState, useEffect } from 'react';
import api from '../../services/api';
import Main from '../../components/Main';
import Table from '../../components/Table';
import TableAction from '../../components/TableAction';
import Button from '../../components/Button';


function Headers() {

    const [chainCode, setChainCode] = useState({});

    async function handleSearchChainCodeInfo() {
        await api.get('/query/getHeader')
            .then(response => {
                setChainCode(response.data)
            })
    }

    return (
        <Main>
            <TableAction title='Chains'>
                <Button
                    icon='fas fa-play'
                    onClick={() => handleSearchChainCodeInfo()}>
                    Search for chaincode info
                </Button>
            </TableAction>
            <Table title='Chains'>
                <thead>
                    <tr>
                        <th>colors</th>
                        <th>name</th>
                        <th>orgMSP</th>
                        <th>orgTitle</th>
                        <th>version</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{Array.of(chainCode.colors).join()}    </td>
                        <td>{chainCode.name}</td>
                        <td>{chainCode.orgMSP}</td>
                        <td>{chainCode.orgTitle}</td>
                        <td>{chainCode.version}</td>
                    </tr>
                </tbody>
            </Table>
        </Main>
    )
}

export default Headers;