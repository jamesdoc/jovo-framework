import { JovoError } from '../JovoError';
import { HandlerMetadata } from '../metadata/HandlerMetadata';

export function buildDuplicateGlobalIntentsErrorMessage(
  entries: [string, HandlerMetadata[]][],
  separator = '\n - ',
): string {
  const duplicateEntriesText = entries
    .map(([intentName, handlers]) => {
      const textBlocks = handlers.map(
        (handler) => `${handler.target.name}.${handler.propertyKey.toString()}`,
      );
      const startText = textBlocks.slice(0, textBlocks.length - 1);
      const text = `${startText.join(separator)} and ${textBlocks[textBlocks.length - 1]}`;
      return `${intentName} in ${text}`;
    })
    .join('; ');
  return `Duplicate global intent names detected:${separator}${duplicateEntriesText}.`;
}

// TODO improve
export class DuplicateGlobalIntentsError extends JovoError {
  constructor(entries: [string, HandlerMetadata[]][]) {
    super({
      message: buildDuplicateGlobalIntentsErrorMessage(entries),
    });
  }
}
