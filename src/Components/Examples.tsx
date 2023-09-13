"use client";

import { Feature } from "./Feature";
import { functionDocs } from "@/Docs";

export const Examples = ({}: {}) => {
  return (
    <>
      {functionDocs.map(({
				title,
				description,
				props,
				codeBlocks,
			}) => (
        <Feature
					key={title}
          title={title}
          description={description}
          props={props}
          codeBlocks={codeBlocks}
        />
      ))}
    </>
  );
};
