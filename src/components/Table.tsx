import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientExclued?: (client: Client) => void
}
export default function Table(props: TableProps) {

    const listActions = props.clientSelected || props.clientExclued
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {listActions ?
                    <th className="p-4">Actions</th>
                    : false}
            </tr>
        )
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.clientSelected ? (
                    <button 
                      onClick={() => props.clientSelected?.(client)}
                     className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                        {IconEdit}
                    </button>

                ) : false}
                {props.clientExclued ? (
                    <button
                    onClick={() => props.clientExclued?.(client)}
                    className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`
                        ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                    `}
                >
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {listActions ? renderActions(client) : false}
                </tr>
            )
        })

    }

    return (
        <table className={`
            w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}