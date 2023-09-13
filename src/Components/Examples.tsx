"use client";

import { Feature } from "./Feature";
import { functionDocs } from "@/Docs";

export const Examples = ({}: {}) => {
  return (
    <>
      {functionDocs.map(({
				title,
				functionName,
				description,
				props,
				codeBlocks,
			}) => (
        <Feature
					key={title}
          title={title}
					functionName={functionName}
          description={description}
          props={props}
          codeBlocks={codeBlocks}
        />
      ))}
    </>
  );
};
