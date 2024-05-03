import { useEffect, useState } from "react";
import {
  DatosTemporada,
  useTemporadaDropdown,
} from "../../hooks/UseDropdownTemporada";

export const DropdownTemporada: React.FC = () => {
  const { temporadas, isLoading, error } = useTemporadaDropdown(
    "http://200.110.169.7/incoco.Api/api/Logistica/getTemporadas?parTipo=fm"
  );
  const [selectedTemporada, setSelectedTemporada] = useState<string>("");

  // Manejar el cambio de temporada seleccionada
  const handleTemporadaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTemporada(event.target.value);
  };

  return (
    <div className="flex items-center justify-center rounded bg-gray-50 h-40 dark:bg-gray-800">
      <form className="max-w-sm">
        <select
          id="temporada"
          className="bg-white border border-gray-300 text-gray-900 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedTemporada}
          onChange={handleTemporadaChange}
        >
          <option disabled value="">
            Temporada
          </option>
          {temporadas.map((temporada: DatosTemporada) => (
            <option key={temporada.codigo} value={temporada.codigo}>
              {temporada.descripcion}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
