import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormPros {
    client: Client
    saveClient?: (client: Client) => void
    cancel?: () => void
}
export default function Form(props: FormPros) {
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    function clearForm() {
        setName('')
        setAge(0)
    }
    return (
        <div>
            {id ? (
                <Input
                    readonly
                    textLabel="Code"
                    value={id}
                    className="mb-4"
                />
            ) : false}

            <Input                
                textLabel="Name"
                name="name"
                type='text'
                value={name}
                onChange={setName}
                requireMessage="Client Name is required"
                className="mb-4"
            />

            <Input                
                textLabel="Age"
                name="age"
                type="number"
                value={age}
                onChange={setAge}
                className="mb-4"
            />
            <div className="flex justify-end mt-7">
                {!id ? <Button onClick={clearForm} color='gray' className=" mb-4 mr-2">Clear</Button> : false}

                <Button
                    onClick={() => props.saveClient?.(new Client(id, name, +age))}
                    color="blue"
                    className="mb-4 mr-2" >
                    {id ? 'Edit' : 'Add New'}
                </Button>
                <Button onClick={props.cancel} color='red' className=" mb-4"> Cancel </Button>
            </div>
        </div>
    )
}