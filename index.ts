import { proximityMap, swapValues } from "./resources";

/**
 * A simple approach for generating a list of possible typos based on a string.<br>
 * Which also lets us feed potential typos in and generate possible correct values.<br>
 *
 * Methods: <br>
 * -White space splitting<br>
 * -Key proximity<br>
 * -Ordinal transposition<br>
 */
export class StringFuzzer {
  text: string[];

  constructor(text: string) {
    this.text = this.whiteSpace(text.toLowerCase());
  }

  private whiteSpace(text: string): string[] {
    return text.split(/\s/);
  }

  /**
   * Wrapper method.<br>
   * When a nearby key is struck instead.
   */
  keyProximity(): string[] {
    const alternates: string[] = [];
    this.text.forEach((word) =>
      alternates.push(...this.generateAlternates(word, proximityMap)),
    );
    return alternates;
  }

  /**
   * Generates a list of alternates using a give map.<br>
   * Limited to one transposition error per word.
   *
   * @param text
   * @param map
   */
  private generateAlternates(
    text: string,
    map: Record<string, string[]>,
  ): string[] {
    const word = text.split("");
    const alternates: string[] = [];
    let temp: string[];

    word.forEach((character, i) => {
      map[character].forEach((alternate) => {
        // Copy our array
        temp = [...word];
        // Swap the alternate for the targeted character
        temp.splice(i, 1, alternate);
        // Convert it back to a string and push into our alternates
        alternates.push(temp.join(""));
      });
    });

    // Remove potential duplicates
    return [...new Set(alternates)];
  }

  /**
   * When keys are struck out of order.
   */
  ordinalTransposition(): string[] {
    const alternates: string[] = [];
    let temp: string[];

    this.text.forEach((word) => {
      temp = word.split("");
      temp.forEach((char, i) => {
        if (i < word.length) {
          alternates.push(swapValues(temp, i, i + 1).join(""));
        }
      });
    });

    // Remove potential duplicates
    return [...new Set(alternates)];
  }

  /**
   * Sometimes people can't type. Let's chain the methods.
   */
  fuzz() {
    const proximity = this.keyProximity();
    const neighbor = this.ordinalTransposition();

    // Remove potential duplicates
    //  And because we're going all out, the expectation is that our
    //  original string might be present.
    return [...new Set([...proximity, ...neighbor, ...this.text])];
  }
}

exports.StringFuzzer = StringFuzzer;
