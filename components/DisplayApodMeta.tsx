import styles from "../styles/Home.module.css";
import { Box, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { parse, format } from "date-fns";
import { ApodRecord, ApodFormat } from "../apod";

export const DisplayApodMeta: FC<{ apod: ApodRecord }> = ({
  apod: { copyright, date, explanation, media_type, service_version, title },
}) => (
  <Grid className={styles.displayapodmeta} gridTemplateColumns={"130px 1fr"}>
    <Box className={styles.metaHeading}>title</Box> <Box>{title}</Box>
    <Box className={styles.metaHeading}>copyright</Box> <Box>{copyright}</Box>
    <Box className={styles.metaHeading}>date</Box>{" "}
    <Box>
      {date ? (
        format(parse(date, ApodFormat, new Date()), "MMMM d, yyyy")
      ) : (
        <i>not given</i>
      )}
    </Box>
    <Box className={styles.metaHeading}>explanation</Box>{" "}
    <Box>{explanation}</Box>
    <Box className={styles.metaHeading}>media type</Box> <Box>{media_type}</Box>
    <Box className={styles.metaHeading}>service version</Box>
    <Box>{service_version}</Box>
  </Grid>
);
