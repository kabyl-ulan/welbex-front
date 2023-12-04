import React from "react";

//local dependencies
import ContainerComponent from "./ContainerComponent";

const SectionComponent = ({ children, idName }) => {
  return (
    <section id={idName}>
      <ContainerComponent>{children}</ContainerComponent>
    </section>
  );
};

export default SectionComponent;
