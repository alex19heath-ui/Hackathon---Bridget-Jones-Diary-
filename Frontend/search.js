const searchForm = document.querySelector('.search-bar')
const searchInput = document.querySelector('#search-input')

if (searchForm) {
  searchForm.addEventListener('submit', extractKeyword)
}

function extractKeyword(e) {
  e.preventDefault()

  const keyword = searchInput.value.trim()
  if (!keyword) return

  window.location.href = `list.html?q=${encodeURIComponent(keyword)}`
}