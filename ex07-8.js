function nazo2() {
  if (document.getElementById('answer').value == '夢') {
    alert('あたり！');
  } else if (document.getElementById('answer').value === '') {
    alert('はずれ！');
  }
}