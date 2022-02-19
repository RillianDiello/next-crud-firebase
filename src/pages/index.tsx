import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

export default function Home() {


  const {
    saveClient,
    selectClient,
    deleteClient,
    newClient,
    displayTable,
    client,
    clients,
    tableVisibled } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-100 to-purple-300
      text-white
    `}>
      <Layout title='Simple Register'>
        {tableVisibled ? (
          <>
            <div className="flex justify-end">
              <Button color='green'              
              className="mb-4"
                onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table clients={clients}
              clientSelected={selectClient}
              clientExclued={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            saveClient={saveClient}
            cancel={displayTable}
          />
        )}
      </Layout>
    </div >
  )
}
