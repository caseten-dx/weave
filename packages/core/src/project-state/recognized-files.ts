import { RECOGNIZED_DOC_FILES, RECOGNIZED_ROOT_FILES } from "@weave/shared";

export function getRecognizedProjectFiles(): string[] {
  return [
    ...RECOGNIZED_ROOT_FILES,
    ...RECOGNIZED_DOC_FILES,
  ];
}