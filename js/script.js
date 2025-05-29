function showForm(formId) {
  document.querySelectorAll('.form').forEach(form => {
    form.classList.remove('active');
  });

  document.getElementById(formId).classList.add('active');

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  const clickedTab = document.querySelector(`.tab[onclick="showForm('${formId}')"]`);
  if (clickedTab) {
    clickedTab.classList.add('active');
  }
}