import { Paciente } from './Paciente'

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {
    // RETO 2
    // useEffect(() => {
    //     if(pacientes.length > 0) {
    //     console.log('Nuevo paciente');
    //     }
    // }, [pacientes])

  return (
    <div className='md:w-1/2 lg:w-1/2 md:h-screen h-screen'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-xl text-center'>Listado Pacientes</h2>

          <p className='text-lg mt-5 mb-10 text-center font-bold'>Administra tus <span className='text-indigo-600 '>Pacientes y Citas</span></p>
          
          <div className='h-screen overflow-y-scroll'>
            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-xl text-center'>No hay pacientes</h2>

          <p className='text-lg mt-5 mb-10 text-center font-bold'>Comienza agregando pacientes <span className='text-indigo-600 '>y apareceran en este lugar</span></p>
        </>
      )}
    </div>
  )
}
