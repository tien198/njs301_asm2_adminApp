import ErrorMsg from "../../../components/ErrorMsg";
import Button from "../../../components/formLayout/Button";
import FieldContainer from "../../../components/formLayout/FieldContainer";
import Input from "../../../components/formLayout/Input";
import Select from "../../../components/formLayout/Select";

export default function RoomForm() {

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit} className=" grid grid-cols-2 gap-6">
            <FieldContainer>
                <Input label="Title" value={name} onChange={onChangeName} />
                {/* {isSubmit && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Input label="Description" value={name} onChange={onChangeName} />
                {/* {isSubmit && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Input label="Price" type="number" value={name} onChange={onChangeName} />
                {/* {isSubmit && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Input label="Max People" value={name} onChange={onChangeName} />
                {/* {isSubmit && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Select label="Type" value={type} onChange={onChangeType} options={typeOpts} />
                {/* {isSubmit && <ErrorMsg fontWeight="font-light" fontStyle="italic" msg='Make sure that you choose the type you need before submit' />} */}
            </FieldContainer>

            <div>
                <Button onClick={() => null}>Send</Button>
            </div>
        </form>
    )
}