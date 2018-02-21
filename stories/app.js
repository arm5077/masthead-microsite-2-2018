if (document.fonts){
  document.fonts.ready.then(function () {
    setTimeout(() => {
      document.querySelector(".loader").classList.add('hidden');
    }, 250);
  });
} else {
  setTimeout(() => {
    document.querySelector(".loader").classList.add('hidden');
  }, 250);
}
