import process from "process";
import { format } from "date-fns";

export const ApodFormat = "yyyy-MM-dd";

export type ApodRecord = {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url: string;
};

export const fetcher = async (date: Date): Promise<ApodRecord | undefined> => {
  if (!date) {
    return;
  }
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&date=${format(date, ApodFormat)}`
  );
  return (await res.json()) as ApodRecord;
};
