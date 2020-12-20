/**
 * Validates if given object is {}
 * @param o 
 */
export function isEmpty(o: Object): boolean {
   return !Object.keys(o).length;
}

/**
 * Validates if provided url is valid
 * 
 * @param input 
 */
export function isValidURL(input: string): boolean {
   let url: URL;
   try {
      url = new URL(input);
   } catch (_) {
      return false;  
   }
  
   return url.protocol === "http:" || url.protocol === "https:";
}
