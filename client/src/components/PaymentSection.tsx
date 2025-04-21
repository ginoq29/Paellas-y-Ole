import { FaMoneyBillWave, FaCreditCard, FaWallet } from "react-icons/fa";
import { PiBank } from "react-icons/pi";

export default function PaymentSection() {
  return (
    <section id="pagos" className="py-16 bg-white shadow-inner">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold text-[#4a3728] mb-4">
            Métodos de Pago
          </h2>
          <p className="text-lg text-gray-700">
            Puedes abonar tu reserva con cualquiera de los siguientes métodos.
            Recuerda que el pago se realiza 50% por adelantado y 50% antes de
            iniciar el evento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Yape */}
          <div className="bg-[#f9f5f0] p-6 rounded-lg text-center shadow">
            <img
              src="/assets/yape-qr.jpeg"
              alt="Código QR Yape"
              className="mx-auto w-40 h-40 mb-4 rounded-md"
            />
            <h3 className="text-lg font-bold text-[#cb2d3e] mb-2">Yape</h3>
            <p className="text-sm text-gray-600">
              Escanea el código o envía a:
            </p>
            <p className="text-sm text-gray-900 font-semibold">
              +51 952 942 616
            </p>
          </div>

          {/* Transferencia bancaria */}
          <div className="bg-[#f9f5f0] p-6 rounded-lg text-center shadow">
            <img
              src="/icons/bank.png"
              alt="Transferencia"
              className="mx-auto w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-bold text-[#cb2d3e] mb-2">
              Transferencia Bancaria
            </h3>
            <p className="text-sm text-gray-600">BCP – Cuenta soles:</p>
            <p className="text-sm text-gray-900 font-semibold">
              19404910836039
            </p>
            <p className="text-sm text-gray-600 mt-2">CCI:</p>
            <p className="text-sm text-gray-900 font-semibold">
              00219410491083603993
            </p>
          </div>

          {/* Efectivo */}
          <div className="bg-[#f9f5f0] p-6 rounded-lg text-center shadow">
            <img
              src="/icons/cash.png"
              alt="Efectivo"
              className="mx-auto w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-bold text-[#cb2d3e] mb-2">
              Pago en Efectivo
            </h3>
            <p className="text-sm text-gray-600">
              Puedes pagar en efectivo el día del evento
            </p>
            <p className="text-sm text-gray-900 font-semibold">
              (se debe haber abonado el 50% previamente)
            </p>
          </div>
        </div>

        {/* Política de cancelación */}
        <p className="text-sm text-gray-600 italic mt-8 text-center">
          ⚠️ Política de cancelación: El pago adelantado del 50% no es
          reembolsable en caso de cancelación del evento por parte del cliente,
          sin excepción.
        </p>
      </div>
    </section>
  );
}
