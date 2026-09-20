type Request = {
  polaziste: string;
  odrediste: string;
  teret: string;
  datum: string;
  status: string;
};

const RequestCard = ({ request, num }: { request: Request; num: number }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center p-10">
      <h1 className="mb-5">Dostava {num}</h1>
      <div className="border border-blue-200 bg-gray-900 hover:bg-gray-800 hover:cursor-pointer rounded-lg flex flex-col items-center justify-between min-w-100 p-2.5 gap-3 mb-5">
        <p>Polazište: {request.polaziste}</p>
        <p>Odredište: {request.odrediste}</p>
        <p>Teret: {request.teret}</p>
        <p>Datum prevoza: {request.datum}</p>
        <p>Status: {request.status}</p>
      </div>
    </section>
  );
};

export default RequestCard;
