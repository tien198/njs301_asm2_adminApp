import { ChangeEventHandler, Dispatch, useState } from 'react'

const use2wayBinding: (init: any) => [any, Dispatch<any>, ChangeEventHandler<any>]
    = (init) => {
        const [state, setState] = useState(init)
        const onChange: ChangeEventHandler<HTMLInputElement>
            = (e) => setState(e.target.value)
        return [state, setState, onChange]
    }

export default use2wayBinding