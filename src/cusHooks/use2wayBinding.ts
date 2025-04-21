import { ChangeEventHandler, useState } from 'react'

export default function use2wayBinding(init: any) {
    const [state, setState] = useState(init)
    const onChange: ChangeEventHandler<HTMLInputElement>
        = (e) => setState(e.target.value)
    return [state, setState, onChange]
}
