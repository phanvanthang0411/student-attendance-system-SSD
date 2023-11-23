import { useState, ChangeEvent, FormEvent } from 'react'
import Input from './InputLogin'
import { loginFields } from './formFields'
import FormAction from './FormAction'
import FormExtra from './FormExtra'

interface Field {
    id: string
    labelText: string
    labelFor: string
    name: string
    type: string
    isRequired: boolean
    placeholder: string
}

const fields: Field[] = loginFields

interface FieldsState {
    [key: string]: string
}

const fieldsState: FieldsState = {}
fields.forEach((field) => (fieldsState[field.id] = ''))

export default function FormLogin() {
    const [loginState, setLoginState] = useState<FieldsState>(fieldsState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        authenticateUser()
    }
    const authenticateUser = () => {}
    return (
        <form className='mt-8 space-y-6'>
            <div className='-space-y-px'>
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>
            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text='Login' />
        </form>
    )
}
