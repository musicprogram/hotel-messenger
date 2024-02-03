import React, { useState } from 'react'

export const FormInputsSign = ({ formData, setFormData }) => {



    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Actualiza el estado del formulario con el nuevo valor
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <div>
                <label htmlFor="email" className="block  font-medium leading-6 text-gray-100 text-2xl">
                    <span className="text-2xl text-purple-400">
                        Correo Electrónico
                    </span>
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-purple-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block font-medium leading-6 text-gray-100">
                    <span className="text-2xl text-purple-400">
                        Password
                    </span>
                </label>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-purple-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

        </>
    )
}
