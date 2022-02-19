import { useState } from "react";

export default function useTableOrForm(){
    const [visibled, setVisibled] = useState<'table' | 'form'>('table')

    const displayTable = () => setVisibled('table')
    const displayForm = () => setVisibled('form')
    return {
        formVisibled: visibled === 'form',
        tableVisibled: visibled === 'table',
        displayTable,
        displayForm
    }
}