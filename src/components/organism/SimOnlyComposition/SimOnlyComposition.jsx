import React from "react";

import "./SimOnlyComposition.css";

import TextSection from "../../molecules/textSection/textSection";

function SimOnlyComposition() {
  return (
    <div className="simonlyTextSection">
      <TextSection
        title="No activation fee on Sim Only plans"
        subtitle="Worth € 15"
        li1="Best network (KPN)"
        li2="Adjustable plans"
        li3="Not satisfied? Refund!"
        buttonvariantpink="pink"
        buttonpinktext="Create you Sim Only bundle"
      />
    </div>
  );
}

export default SimOnlyComposition;
