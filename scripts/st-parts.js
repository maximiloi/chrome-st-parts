function createLink(titleEl, linkData) {
  const linkEl = document.createElement('a');
  linkEl.innerText = linkData.name;
  linkEl.href = linkData.url;
  linkEl.target = '_blank';
  linkEl.style.marginLeft = linkData.marginLeft || '0.5rem';
  linkEl.style.fontWeight = '900';
  linkEl.style.color = 'red';
  titleEl.after(linkEl);
}

const linkData = [
  { name: 'Armtek', url: 'https://armtek.ru/search?text=' },
  { name: 'Ixora', url: 'https://ixora-auto.ru/catalog-article?article=' },
  { name: 'AllAutoParts', url: 'https://allautoparts.ru/' },
  { name: 'Rossko', url: 'https://rossko.ru/search/?text=&q=&t=d' },
  { name: 'ПартКом', url: 'https://www.part-kom.ru/new/#/search/0/0/0/' },
  { name: 'G', url: 'https://www.google.com/search?q=', marginLeft: '1rem' },
];

setTimeout(function () {
  const titleElArr = document.querySelectorAll('span.part-article');

  if (titleElArr.length > 0) {
    titleElArr.forEach((titleEl) => {
      const titleName = titleEl.textContent.trim();
      linkData.forEach((link) => {
        createLink(titleEl, { ...link, url: link.url + titleName });
      });
    });
  } else {
    alert('Перезагрузите страницу, F5');
  }
}, 3000);
