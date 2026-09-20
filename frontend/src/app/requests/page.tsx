import RequestCard from "@/components/RequestCard";

const requests = [
  {
    polaziste: "Istocno Sarajevo",
    odrediste: "Bijeljina",
    teret: "Namjestaj",
    datum: "19.9.2026",
    status: "Otvoren",
  },
  {
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
        <RequestCard key={i} request={req} num={i + 1} />
      ))}
    </main>
  );
};

export default KorisnikPage;
