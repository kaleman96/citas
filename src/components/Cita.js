import React from "react";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        Mascota: <spam>{cita.mascota}</spam>
        <br />
        Dueño: <spam>{cita.propietario}</spam>
        <br />
        Fecha: <spam>{cita.fecha}</spam>
        <br />
        Hora: <spam>{cita.hora}</spam>
        <br />
        Sintomas: <spam>{cita.sintomas}</spam>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Elimar &times;
      </button>
    </div>
  );
};

export default Cita;
