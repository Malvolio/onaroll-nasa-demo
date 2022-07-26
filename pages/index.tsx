/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { DatePanel } from "../components/DatePanel";
import styles from "../styles/Home.module.css";
import { Box, ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { theme as DatepickerTheme } from "../components/datepicker.theme";
import { useRouter } from "next/router";
import { parse, format } from "date-fns";
import { DisplayApodMeta } from "../components/DisplayApodMeta";
import { ApodFormat, fetcher } from "../apod";

const firstOf = (s: string | string[] | undefined): string =>
  s ? (typeof s === "string" ? s : s[0]) : "";

const Home: NextPage = () => {
  const { query, push } = useRouter();
  const date = query?.date
    ? parse(firstOf(query?.date), ApodFormat, new Date())
    : new Date();
  const { data } = useSWR(date, fetcher);
  const onChange = (d: Date) => {
    const date = format(d, ApodFormat);
    push(
      {
        query: {
          date,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };
  return (
    <ChakraProvider theme={DatepickerTheme}>
      <div className={styles.container}>
        <Head>
          <title>NASA Picture of the Day</title>
          <meta name="description" content={data?.explanation} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Astronomy Picture of the Day</h1>
          <h2 className={styles.subtitle}>{data?.title || "Loading..."}</h2>
          <SimpleGrid columns={2} spacing={10}>
            <Box className={styles.apod}>
              <img
                style={{
                  opacity: data ? 1 : 0.2,
                }}
                src={data?.url || "/bh_visualization.jpeg"}
                alt={data?.explanation || "loading"}
              />
            </Box>
            <Box>
              <DatePanel value={date} onChange={onChange} />
              {data && <DisplayApodMeta apod={data} />}
            </Box>
          </SimpleGrid>
        </main>
      </div>
    </ChakraProvider>
  );
};

export default Home;
