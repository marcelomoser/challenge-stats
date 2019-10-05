/**
 * Remove espaçamentos e quebras de linhas da string especificada.
 * @param { string } text texto a ser limpo.
 */
export const cleanText = text => text.replace(/\s\s+/g, ' ')