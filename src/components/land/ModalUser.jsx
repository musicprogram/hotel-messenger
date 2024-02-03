import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { modalUserSign } from '../../states/userStates';
import { FormUserSign } from './FormUserSign';

export const ModalUser = () => {
    const modalRef = useRef(null);

    const [visible, setVisible] = useRecoilState(modalUserSign);

    useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        visible ? modalRef.current.showModal() : modalRef.current.close();
    }, [visible]);

    const handleClose = () => {
        setVisible(false)
    }

    const handleESC = (event) => {
        event.preventDefault();
        handleClose();
    }

    return (
        <div>

            <dialog ref={modalRef} id="my_modal_1" className="modal" onCancel={handleESC}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hola!</h3>
                    <p className="py-4">Ingresa tus datos</p>

                    <div>
                        <FormUserSign />
                    </div>
                </div>
            </dialog>
        </div>
    );
};


