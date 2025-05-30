import { useState, useEffect } from "react";
import { ActionFunctionArgs, Form, redirect, useActionData } from "react-router";

import ErrorMsg from '../../components/ErrorMsg'

import { addJwt } from "../../utilities/localStorageUtils/authenToken";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import use2wayBinding from "../../cusHooks/use2wayBinding";



function SignUp() {
    const actionData = useActionData()

    const [userName, , onchangeUserName] = use2wayBinding('')
    const [password, , onchangePassword] = use2wayBinding('')

    const [userNameError, setUserNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    useEffect(() => {
        if (actionData && actionData.errors && actionData.errors.userName)
            setUserNameError(actionData.errors.userName)
        if (actionData && actionData.errors && actionData.errors.password)
            setPasswordError(actionData.errors.password)
    }, [actionData])
    useEffect(() => setUserNameError(''), [userName])
    useEffect(() => setPasswordError(''), [password])

    return (
        <div className="flex flex-col items-center mt-20 h-96">
            <h3 className="text-4xl font-bold my-6">Sign Up</h3>
            <Form method="post" className="flex flex-col gap-4 w-80">
                <input type="text" name="userName"
                    value={userName} onChange={onchangeUserName}
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Username" />
                {userNameError && <ErrorMsg msg={userNameError} />}

                <input type="password" name="password"
                    value={password} onChange={onchangePassword}
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Password" />
                {passwordError && <ErrorMsg msg={passwordError} />}

                <button className="bg-blue-600 text-white rounded-md py-3">
                    Create Account
                </button>
            </Form>
        </div>
    );
}

export default SignUp;

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())
    try {
        const response = await fetch(BackendAdminUri.signUp, {
            method: request.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok)
            return await response.json()

        const tokenVsPayload = await response.json()
        addJwt(tokenVsPayload)

        // store.dispatch({
        //     type: 'authen/setAuthen',
        //     payload: tokenVsPayload.user
        // })

        return redirect('/')
    } catch (err) { console.error(err) }
    return null
}

