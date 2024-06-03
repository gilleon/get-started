import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {/* 
            display the items in the array object using the dot notation
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
        {/* listing all items in an array using the ... notation */}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        {/* using map to display all the items */}
        {CORE_CONCEPTS.map((items) => (
          <CoreConcept key={items.title} {...items} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
