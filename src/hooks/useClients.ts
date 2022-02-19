import { useEffect, useState } from 'react'
import ClientCollection from '../backend/db/ClientCollection'
import Client from '../core/Client'
import ClientRepository from '../core/ClientRepository'
import useTableOrForm from './useTableOrForm'


export default function useClients() {

    const repo: ClientRepository = new ClientCollection()

    const [clients, setClients] = useState<Client[]>([])
    const { tableVisibled, displayForm, displayTable } = useTableOrForm()
    const [client, setClient] = useState<Client>(Client.empty())

    useEffect(() => {
        getAll()
    }, [])
    function selectClient(client: Client) {
        setClient(client)
        displayForm()
    }

    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAll()
    }

    function getAll(): void {
        repo.findAll().then(clients => {
            setClients(clients)
            displayTable()
        })
    }

    function newClient() {
        setClient(Client.empty())
        displayForm()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    return {
        saveClient,
        newClient,
        deleteClient,
        selectClient,
        getAll,
        displayTable,
        client,
        clients,
        tableVisibled
    }
}