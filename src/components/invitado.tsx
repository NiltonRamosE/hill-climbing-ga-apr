import React from "react";

interface InvitadoEspecialProps {
  imagen: string;
  titulo: string;
}

const InvitadoEspecial: React.FC<InvitadoEspecialProps> = ({ imagen, titulo }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imagen}
        alt={titulo}
        className="w-28 h-28 rounded-full object-cover shadow-md"
      />
      <h3 className="mt-2 font-semibold text-white text-sm">{titulo}</h3>
    </div>
  );
};

export default InvitadoEspecial;
