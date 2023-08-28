"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

import { events } from "./data";

export default function Home() {
  const styles = {
    container: {
      maxWidth: 1080,
      margin: "0 auto",
    },
    color: {
      primary: "#1e9dc4",
      secondary: "#ee343f",
    },
  };

  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-55GMDFF4",
    });
  });

  return (
    <main>
      <header
        style={{
          borderBottom: `1px solid ${styles.color.primary}`,
          padding: 20,
        }}
      >
        <h1 style={styles.container}>
          <span style={{ color: styles.color.primary }}>Chicago</span>{" "}
          <span style={{ color: styles.color.secondary }}>Events</span>
        </h1>
      </header>
      <section style={styles.container}>
        {events.map((event, index) => (
          <div key={index}>
            <h2>{event.title}</h2>
            {event.description.map((line, index2) => (
              <p key={`${index}_${index2}`}>{line}</p>
            ))}
          </div>
        ))}
      </section>
      <footer style={{ ...styles.container, marginTop: 60 }}>
        <p>
          Discover exciting Chicago events that showcase the city&apos;s vibrant
          culture. From music festivals to art exhibitions, there&apos;s
          something for everyone. Stay informed about upcoming events and make
          the most of your time in Chicago.
        </p>
      </footer>
    </main>
  );
}
