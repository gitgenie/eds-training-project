export default function decorate(block) {
  const rows = [...block.children];
  const menu = document.createElement('nav');
  menu.className = 'side-menu-navigation';
  menu.setAttribute('aria-label', 'Section navigation');

  const menuList = document.createElement('ul');
  const panel = document.createElement('div');
  panel.className = 'side-menu-panel';
  panel.setAttribute('aria-live', 'polite');

  rows.forEach((row, index) => {
    const [labelCell, contentCell] = [...row.children];
    if (!labelCell || !contentCell) return;

    const label = labelCell.textContent.trim();
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.setAttribute('aria-controls', `side-menu-panel-${index}`);

    const item = document.createElement('li');
    item.append(button);
    menuList.append(item);

    const content = document.createElement('div');
    content.id = `side-menu-panel-${index}`;
    content.className = 'side-menu-content';
    while (contentCell.firstChild) content.append(contentCell.firstChild);

    button.addEventListener('click', () => {
      menuList.querySelectorAll('button').forEach((menuButton) => {
        menuButton.classList.toggle('active', menuButton === button);
        menuButton.setAttribute('aria-expanded', menuButton === button ? 'true' : 'false');
      });
      panel.replaceChildren(content);
    });

    if (index === 0) {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      panel.append(content);
    } else {
      button.setAttribute('aria-expanded', 'false');
    }
  });

  menu.append(menuList);
  block.replaceChildren(menu, panel);
}
