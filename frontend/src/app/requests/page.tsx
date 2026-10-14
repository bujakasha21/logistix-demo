"use client";
import RequestCard from "@/components/RequestCard";
import type { Request } from "@/types/request";
import { useEffect, useState } from "react";

const KorisnikPage = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await fetch("http://127.0.0.1:8000/requests");
      const data = await res.json();

      setRequests(data);
    };

    fetchRequests();
  }, []);

  return (
    <main>
      {requests.map((req, i) => (
        <RequestCard key={req.id} request={req} num={i + 1} />
      ))}
    </main>
  );
};

export default KorisnikPage;
