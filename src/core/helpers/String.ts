/* eslint-disable no-unsafe-optional-chaining */
export function capitalizeFirstLetter(string: string) {
  const new_word =
    string.charAt(0).toUpperCase() + string.slice(1)?.split('-')?.join(' ')

  const split_word = new_word.split(' ')

  for (let i = 0; i < split_word.length; i += 1) {
    split_word[i] =
      split_word[i].charAt(0).toUpperCase() + split_word[i].slice(1)
  }

  const result = split_word.join(' ')

  return result
}
