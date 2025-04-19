import { motion } from "framer-motion";

const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

// Datos ficticios de reservas
const calendarData = {
  year: 2025,
  month: 3, // Abril (0 indexado)
  days: [
    { day: 1, status: "disponible" },
    { day: 2, status: "disponible" },
    { day: 3, status: "confirmado" },
    { day: 4, status: "confirmado" },
    { day: 5, status: "pendiente" },
    { day: 6, status: "disponible" },
    // ... añade más días aquí según lo necesites
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "disponible":
      return "bg-green-500";
    case "pendiente":
      return "bg-yellow-400";
    case "confirmado":
      return "bg-red-500";
    default:
      return "bg-gray-200";
  }
};

const totalDaysInApril = 30;
const firstDayWeekday = 1; // 1 = Lunes

export default function CalendarSection() {
  const daysArray = Array.from({ length: totalDaysInApril }, (_, i) => {
    const dayData = calendarData.days.find(d => d.day === i + 1);
    return {
      day: i + 1,
      status: dayData?.status || "disponible",
    };
  });

  const offset = firstDayWeekday - 1;

  return (
    <section id="calendario" className="py-16 bg-[#f9f5f0]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-['Playfair_Display'] font-bold text-[#4a3728] mb-2">
          Consulta fechas disponibles
        </h2>
        <span className="block w-24 h-1 bg-[#f8b400] mx-auto mb-8"></span>

        <h3 className="text-2xl font-semibold text-[#cb2d3e] mb-4">Abril 2025</h3>

        <div className="grid grid-cols-7 gap-2 text-[#4a3728] font-medium mb-4">
          {daysOfWeek.map(day => (
            <div key={day} className="uppercase text-sm">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: offset }).map((_, i) => (
            <div key={`offset-${i}`} />
          ))}
          {daysArray.map(({ day, status }) => (
            <motion.div
              key={day}
              className={`rounded-lg p-2 text-white text-sm font-semibold ${getStatusColor(status)}`}
              whileHover={{ scale: 1.1 }}
            >
              {day}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-[#4a3728]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-sm" /> Disponible
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm" /> Pendiente
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-sm" /> Confirmado
          </div>
        </div>
      </div>
    </section>
  );
}
