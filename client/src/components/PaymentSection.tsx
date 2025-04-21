export default function PaymentSection() {
  return (
    <section id="pagos" className="py-16 bg-white text-[#4a3728] shadow-inner">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-['Playfair_Display'] text-center mb-8">
          Formas de pago
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center text-sm">
          {/* Yape QR */}
          <div>
            <img
              src="/assets/yape-qr.jpeg"
              alt="Código QR de Yape"
              className="mx-auto w-32 h-32 mb-3 rounded shadow"
            />
            <p>
              Yape al <strong>+51 952 942 616</strong>
            </p>
          </div>

          {/* Transferencia bancaria */}
          <div>
            <img
              src="/icons/bank.png"
              alt="Banco"
              className="mx-auto w-12 h-12 mb-3"
            />
            <p className="mb-1 font-semibold">BCP - Cuenta en soles</p>
            <p className="break-words text-xs">19404910836039</p>
            <p className="mt-2 font-semibold">CCI</p>
            <p className="break-words text-xs">00219410491083603993</p>
          </div>

          {/* Efectivo */}
          <div>
            <img
              src="/icons/cash.png"
              alt="Pago en efectivo"
              className="mx-auto w-12 h-12 mb-3"
            />
            <p>
              También aceptamos pago en efectivo
              <br />
              el día del evento
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto mt-10 text-center bg-[#f9f5f0] p-4 rounded shadow text-sm">
          <p className="font-semibold">Política de pagos</p>
          <p>
            Todos los servicios requieren un <strong>50% de adelanto</strong>{" "}
            para confirmar la reserva. El
            <strong> 50% restante</strong> se debe abonar{" "}
            <strong>antes de iniciar el evento</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
