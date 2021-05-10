import React from "react";
import DisplayCard from "../../core/displayCard/DisplayCard";
import RenderedForm from "../components/RenderedForm";

const RenderedFormRootPage = (): JSX.Element => {
  return <DisplayCard children={<RenderedForm />} />;
};

export default RenderedFormRootPage;
