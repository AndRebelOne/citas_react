import React from 'react'

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    // Para evitar hacer paciente.nombre, etc
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Estas seguro de eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id);
        }
    }


    return (
        <div className='ml-3 mb-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex justify-evenly mt-10'>
                <button
                    type='button'
                    className='bg-indigo-600 px-10 py-2 text-white uppercase font-bold p-3 hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg'
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                    type='button'
                    className='bg-red-600 px-10 py-2 text-white uppercase font-bold p-3 hover:bg-red-700 cursor-pointer transition-colors rounded-lg'
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}
