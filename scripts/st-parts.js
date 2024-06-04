function createLink(titleEl) {
  const titleName = titleEl.textContent.trim();

  const linkArmtecEl = document.createElement('a');
  linkArmtecEl.innerText = 'Armtek';
  linkArmtecEl.href = `https://armtek.ru/search?text=${titleName}`;
  linkArmtecEl.target = '_blank';
  linkArmtecEl.style.marginLeft = '0.5rem';
  linkArmtecEl.style.fontWeight = '900';
  linkArmtecEl.style.color = 'red';
  titleEl.after(linkArmtecEl);

  const linkIxoraEl = document.createElement('a');
  linkIxoraEl.innerText = 'Ixora';
  linkIxoraEl.href = `https://ixora-auto.ru/catalog-article?article=${titleName}`;
  linkIxoraEl.target = '_blank';
  linkIxoraEl.style.marginLeft = '0.5rem';
  linkIxoraEl.style.fontWeight = '900';
  linkIxoraEl.style.color = 'red';
  titleEl.after(linkIxoraEl);

  const linkAAPEl = document.createElement('a');
  linkAAPEl.innerText = 'AllAutoParts';
  linkAAPEl.href = `https://allautoparts.ru/${titleName}`;
  linkAAPEl.target = '_blank';
  linkAAPEl.style.marginLeft = '0.5rem';
  linkAAPEl.style.fontWeight = '900';
  linkAAPEl.style.color = 'red';
  titleEl.after(linkAAPEl);

  const linkRoscoEl = document.createElement('a');
  linkRoscoEl.innerText = 'Rossko';
  linkRoscoEl.href = `https://rossko.ru/search/?text=${titleName}&q=&t=d`;
  linkRoscoEl.target = '_blank';
  linkRoscoEl.style.marginLeft = '0.5rem';
  linkRoscoEl.style.fontWeight = '900';
  linkRoscoEl.style.color = 'red';
  titleEl.after(linkRoscoEl);

  const linkPKEl = document.createElement('a');
  linkPKEl.innerText = 'ПартКом';
  linkPKEl.href = `https://www.part-kom.ru/new/#/search/0/0/0/${titleName}`;
  linkPKEl.target = '_blank';
  linkPKEl.style.marginLeft = '0.5rem';
  linkPKEl.style.fontWeight = '900';
  linkPKEl.style.color = 'red';
  titleEl.after(linkPKEl);

  const linkGoogleEl = document.createElement('a');
  linkGoogleEl.innerText = 'G';
  linkGoogleEl.href = `https://www.google.com/search?q=${titleName}`;
  linkGoogleEl.target = '_blank';
  linkGoogleEl.style.marginLeft = '1rem';
  linkGoogleEl.style.fontWeight = '900';
  linkGoogleEl.style.color = 'red';
  titleEl.after(linkGoogleEl);
}

setTimeout(function () {
  const titleElArr = document.querySelectorAll('span.part-article');

  if (titleElArr.length > 0) {
    titleElArr.forEach((titleEl) => {
      createLink(titleEl);
    });
  } else {
    alert('Перезагрузите страницу, F5');
  }
}, 3000);
