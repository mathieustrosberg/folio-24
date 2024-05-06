import React from "react";

import StackList from "@/composants/StackList";

const Stacks = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      <h2 className="flex flex-col h-100 md:w-5/12 gap-10 text-sm">
        Compétences en développement
      </h2>
      <div className="flex flex-col md:w-8/12 leading-7 gap-6 text-sm">
        <StackList />
      </div>
    </div>
  );
};

export default Stacks;
