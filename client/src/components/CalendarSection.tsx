export default function CalendarSection() {
  return (
    <section id="calendario" className="py-16 bg-[#f9f5f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-['Playfair_Display'] text-center text-[#4a3728] mb-8">
          Consulta nuestras fechas disponibles
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=a25ba77c320365ec12832810c996fde320aea3d5d06a9c3b3895e7651897cbc8%40group.calendar.google.com&ctz=America%2FLima"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Calendario de reservas"
          ></iframe>
        </div>

        {/* Leyenda visual */}
        <div className="max-w-md mx-auto mt-8 text-sm text-[#4a3728] bg-white bg-opacity-40 p-4 rounded shadow">
          <p className="mb-2 font-semibold text-center">Leyenda de reservas</p>
          <div className="space-y-2">
            <p><span className="inline-block w-4 h-4 bg-green-500 rounded-sm mr-2"></span>Disponible</p>
            <p><span className="inline-block w-4 h-4 bg-sky-400 rounded-sm mr-2"></span>Reservado – Almuerzo</p>
            <p><span className="inline-block w-4 h-4 bg-yellow-400 rounded-sm mr-2"></span>Reservado – Cena</p>
            <p><span className="inline-block w-4 h-4 bg-red-500 rounded-sm mr-2"></span>Día completo reservado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
