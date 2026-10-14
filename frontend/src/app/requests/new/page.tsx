"use client";

import React, { useEffect, useState } from "react";
import type { Request } from "@/types/request";

const PrevoznikPage = () => {
  const [newRequest, setNewRequest] = useState<Request | null>(null);
  const [polaziste, setPolaziste] = useState("");
  const [odrediste, setOdrediste] = useState("");
  const [teret, setTeret] = useState("");
  const [datum, setDatum] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const request: Request = {
      polaziste,
      odrediste,
      teret,
      datum,
      status: "Otvoren",
    };

    console.log(newRequest);
    setNewRequest(request);

    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    if (!newRequest) {
      return;
    }

    const fetchReq = await fetch("http://127.0.0.1:8000/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    });

    if (!fetchReq.ok) {
      return;
    }

    setIsCreated(true);
    setIsModalOpen(false);
  };

  return (
    <section className="w-full min-h-screen p-10">
      {!isCreated && (
        <form
          className="flex flex-col gap-8 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start">
            <label htmlFor="polaziste">Polazište:</label>
            <input
              id="polaziste"
              className="bg-gray-700 h-10 border border-gray-300 rounded-xl p-4 focus:shadow-none focus:outline-0"
              type="text"
              value={polaziste}
              onChange={(e) => setPolaziste(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="odrediste">Odredište:</label>
            <input
              id="odrediste"
              className="bg-gray-700 h-10 border border-gray-300 rounded-xl p-4 focus:shadow-none focus:outline-0"
              type="text"
              value={odrediste}
              onChange={(e) => setOdrediste(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="teret">Teret:</label>
            <input
              id="teret"
              className="bg-gray-700 h-10 border border-gray-300 rounded-xl p-4 focus:shadow-none focus:outline-0"
              type="text"
              value={teret}
              onChange={(e) => setTeret(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="datum">Datum Prevoza:</label>
            <input
              id="datum"
              className="bg-gray-700 h-10 border border-gray-300 rounded-xl p-4 focus:shadow-none focus:outline-0"
              type="date"
              value={datum}
              onChange={(e) => setDatum(e.target.value)}
              required
            />
          </div>
          <button type="submit">Napravi zahtjev</button>
        </form>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Provjerite Vaš zahtjev</h2>
            <p>Polazište: {polaziste}</p>
            <p>Odredište: {odrediste}</p>
            <p>Teret: {teret}</p>
            <p>Datum: {datum}</p>
            <div className="flex items-center justify-between gap-5">
              <button onClick={() => setIsModalOpen(false)}>Izmijeni</button>
              <button onClick={handleConfirm}>Potvrdi zahtjev</button>
            </div>
          </div>
        </div>
      )}

      {isCreated && <div>Zahtjev je uspjesno kreiran!</div>}
    </section>
  );
};

export default PrevoznikPage;
