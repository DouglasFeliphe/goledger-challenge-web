import { useState, useEffect } from 'react';
import api from '../../services/api';
import Main from '../../components/Main';
import Table from '../../components/Table';
import TableAction from '../../components/TableAction';
import Button from '../../components/Button';

function Transactions() {

    const [transactions, setTransactions] = useState([]);
    const [transaction, setTransaction] = useState('');
    const [txName, setTxName] = useState('');

    useEffect(() => {
        api.get('/query/getTx')
            .then(response => {
                setTransactions(response.data)
            })
    }, []);

    async function handleExecTx() {
        const data = {}

        await api.post(`/query/${txName}`, data)
            .then(response => {
                alert(JSON.stringify(response.data))

            }).catch(error => {
                alert('Not found.')
            })
    }

    async function handleExecNSave() {
        await api.post(`/invoke/${txName}`)
            .then(response => {
                alert(JSON.stringify(response.data))

            }).catch(error => {
                alert('Not found.')
            })
    }

    async function handleShowTransaction() {
        const data = {
            txName: txName
        }

        await api.post('/query/getTx', data)
            .then(response => {
                alert(JSON.stringify(response.data));

            }).catch(error => {
                alert('Not found.');
            })
    }

    return (
        <Main>
            <TableAction title='Transactions'>
                <Button
                    icon='fas fa-search'
                    onClick={() => handleShowTransaction()}>
                    Search transaction
                </Button>
                <Button
                    icon='fas fa-play'
                    onClick={() => handleExecTx()}>
                    Execute transaction
                </Button>
                <Button
                    icon='fas fa-save'
                    onClick={() => handleExecNSave()}>
                    Execute transaction and save
                </Button>
                <input
                    className='form-control rounded mt-3'
                    placeholder='Enter the name of transaction...'
                    onChange={e => setTxName(e.target.value)}
                />
            </TableAction>

            <Table>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Label</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.tag}</td>
                            <td>{transaction.label}</td>
                            <td>{transaction.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Main>
    )
}

export default Transactions