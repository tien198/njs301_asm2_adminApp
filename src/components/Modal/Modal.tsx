import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../cusHooks/reduxHooks";
import { setHidden as fadingHide } from "../../store/slices/modalSlice";
import { FaXmark } from 'react-icons/fa6'

// css
import classes from './Modal.module.css'


export function useHideModal() {
    const dispath = useAppDispatch()
    return () => {
        dispath(fadingHide(classes['fading-hidden']))
    }
}

function Modal({ children }: PropsWithChildren) {
    const hidden = useAppSelector(state => state.modal.hiddenClass)

    const hide = useHideModal()

    useEffect(() => {
        function handKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape')
                hide()
        }

        window.addEventListener('keydown', handKeyDown)
        
        // cleanup
        return () => window.removeEventListener('keydown', handKeyDown)
    }, [])

    return createPortal(
        <div className={hidden}>
            <div className={classes['backdrop']} onClick={hide}></div>
            <div className={`${classes['modal']} `}>
                <FaXmark onClick={hide} className="fixed top-4 right-10 text-3xl lg:top-7 lg:text-4xl hover:cursor-pointer" />
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
}

export default Modal;