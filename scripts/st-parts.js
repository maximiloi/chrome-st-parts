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
  { name: 'Itrade', url: 'https://itrade.forum-auto.ru/shop/index.html' },
  { name: 'The-parts', url: 'https://the-parts.ru/?action=search&code=' },
  { name: 'Armtek', url: 'https://etp.armtek.ru/search' },
  {
    name: 'Ixora',
    url: 'https://b2b.ixora-auto.ru/Shop/Search.html?DetailNumber=',
  },
  {
    name: 'AllAutoParts',
    url: 'https://allautoparts.ru/asp-x/Search/SearchPage.aspx',
  },
  {
    name: 'Rossko',
    url: 'https://spb.rossko.ru/product?sid=df1a53bf3760fe9291cbd034fa6616fc&q=',
  },
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
}, 6000);
