import React from "react";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Examples() {
  let [defaultTopic, updatedTopic] = useState();
  function handleClick(selectedButton) {
    updatedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={defaultTopic === "components"}
          onSelect={() => handleClick("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={defaultTopic === "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={defaultTopic === "props"}
          onSelect={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={defaultTopic === "state"}
          onSelect={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      {!defaultTopic ? (
        <p>Please select a topic null</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[defaultTopic].title}</h3>
          <p>{EXAMPLES[defaultTopic].description}</p>
          <code>{EXAMPLES[defaultTopic].code}</code>
        </div>
      )}
    </Section>
  );
}
