import { Button, Tooltip, useClipboard } from "@chakra-ui/react";
import { getIconSize } from "@/Helpers/icons";

export default function CopyToClipboard({
  toCopy,
  subject = "code",
}: {
  toCopy: string;
  subject?: string;
}) {
  const { onCopy, hasCopied } = useClipboard(toCopy);

  return (
    <Button
      disabled={hasCopied}
      size={"sm"}
      onClick={onCopy}
			variant={"ghost"}
    >
      {hasCopied ? "Copied!" : "Copy"}
    </Button>
  );
}
