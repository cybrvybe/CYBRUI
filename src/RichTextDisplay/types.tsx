export type RichTextDataType = {
  content: any;
  type:
    | "text"
    | "image"
    | "video"
    | "embed"
    | "quote"
    | "link"
    | "list"
    | "code"
    | "table";
};

export type RichTextDisplayProps = {
    data: RichTextDataType[];
};
