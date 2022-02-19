import { dataBase } from '../config'
import firestore, {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
} from 'firebase/firestore'
import Cliente from '../../core/Client'
import ClienteRepositorio from '../../core/ClientRepository'

export default class ClientCollection implements ClienteRepositorio {

    #conversor = {
        toFirestore: (cliente: Cliente) => {
            return {
                nome: cliente.name,
                idade: cliente.age,
            }
        },
        fromFirestore: (
            snapshot: firestore.QueryDocumentSnapshot,
            options: firestore.SnapshotOptions,
        ) => {
            const dados = snapshot.data(options)
            return new Cliente(snapshot.id, dados.nome, dados.idade)
        },
    }

    #colecaoCliente = collection(dataBase, 'clientes').withConverter(this.#conversor)

    async save(client: Cliente): Promise<Cliente> {
        if (client?.id) {
            await setDoc(
                doc(dataBase, 'clientes', String(client.id)).withConverter(this.#conversor),
                client,
            )
            return client
        } else {
            const docRef = await addDoc(
                this.#colecaoCliente,
                client,
            )
            const doc = await getDoc(docRef)
            return doc.data()
        }
    }

    async delete(client: Cliente): Promise<void> {
        return await deleteDoc(doc(dataBase, 'clientes', client.id))
    }

    async findAll(): Promise<Cliente[]> {
        
        const clientesCol = this.#colecaoCliente
        const clientesSnapshot = await getDocs(clientesCol)        
        const clientesList = clientesSnapshot.docs.map((doc) => doc.data()) ?? []
        return clientesList
    }
}