import Client from './Client'

export default interface ClientRepository {
    save(client: Client): Promise<Client>
    delete(client: Client): Promise<void>
    findAll(): Promise<Client[]>

}