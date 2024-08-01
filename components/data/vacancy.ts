// data/vacancy.ts

export interface VacancyData {
  id: number;
  job: string;
  availability: string;
}

export const vacancyData: VacancyData[] = [
  { id: 1, job: "Anesthesiologists", availability: "45,904 Open Positions" },
  { id: 2, job: "Surgeons", availability: "50,364 Open Positions" },
  { id: 3, job: "Orthodontists", availability: "4,339 Open Positions" },
  { id: 4, job: "Maxillofacial Surgeons", availability: "20,079 Open Positions" },
  { id: 5, job: "Software Developer", availability: "74,875 Open Positions" },
  { id: 6, job: "Psychiatrists", availability: "43,359 Open Positions" },
  { id: 7, job: "Data Scientist", availability: "74,875 Open Positions" },
  { id: 8, job: "IT Manager", availability: "28,200 Open Positions" },
  { id: 9, job: "Management Analysis", availability: "93,046 Open Positions" },
  { id: 10, job: "Operations Research Analysis", availability: "61,391 Open Positions" },
  { id: 11, job: "Financial Manager", availability: "16,627 Open Positions" },
  { id: 12, job: "UI UX Designers", availability: "50,963 Open Positions" },
];
