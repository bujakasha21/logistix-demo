import RequestCard from "@/components/RequestCard";
import type { Request } from "@/types/request";

const requests: Request[] = [
  {
    id: 1,
    polaziste: "Istocno Sarajevo",
    odrediste: "Bijeljina",
    teret: "Namjestaj",
    datum: "19.9.2026",
    status: "Otvoren",
  },
  {
    id: 2,
    polaziste: "Tuzla",
    odrediste: "Sarajevo",
    teret: "Gradjevinski materijal",
    datum: "16.9.2026",
    status: "Otvoren",
  },
];

const KorisnikPage = () => {
  return (
    <main>
      {requests.map((req, i) => (
        <RequestCard key={req.id} request={req} num={i + 1} />
      ))}
    </main>
  );
};

export default KorisnikPage;
