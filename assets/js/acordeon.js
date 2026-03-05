const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const acordeon = trigger.closest('.acordeon');
    const isOpen = acordeon.classList.contains('open');

    document
      .querySelectorAll('.acordeon.open')
      .forEach((a) => a.classList.remove('open'));

    if (!isOpen) acordeon.classList.add('open');
  });
});
