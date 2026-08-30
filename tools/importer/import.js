/**
 * Convert a source section containing text, an image, and a link into an EDS block.
 *
 * @param {HTMLElement} section source section from the importer
 * @returns {HTMLElement} transformed section
 */
export default function transform(section) {
  const image = section.querySelector('img');
  const link = section.querySelector('a');
  const text = [...section.querySelectorAll('h1, h2, h3, h4, h5, h6, p')]
    .find((element) => !element.contains(image) && !element.contains(link));
  const block = document.createElement('div');
  block.className = 'text-image-button';

  const textCell = document.createElement('div');
  if (text) textCell.append(text.cloneNode(true));

  const imageCell = document.createElement('div');
  if (image) imageCell.append(image.cloneNode(true));

  const buttonCell = document.createElement('div');
  if (link) buttonCell.append(link.cloneNode(true));

  block.append(textCell, imageCell, buttonCell);
  section.replaceChildren(block);
  return section;
}
