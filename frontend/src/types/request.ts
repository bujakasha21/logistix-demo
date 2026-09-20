export type Request = {
  id?: number;
  polaziste: string;
  odrediste: string;
  teret: string;
  datum: string;
  status: "Otvoren" | "U toku" | "Zatvoren";
};
