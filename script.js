document.addEventListener('DOMContentLoaded', () => {
  initCustomDropdowns()
})

function initCustomDropdowns() {
  // Select all custom wrappers
  const wrappers = document.querySelectorAll('.custom-dropdown-wrapper')

  wrappers.forEach((wrapper) => {
    // Find parent container
    const parent = wrapper.closest('.form-group') || wrapper.parentElement
    if (!parent) return

    // Locate Elements
    const hiddenSelect = parent.querySelector('select')
    const dropdownButton = wrapper.querySelector('.dropdown-toggle')
    const dropdownButtonSpan =
      dropdownButton.querySelector('span') || dropdownButton
    const dropdownItems = wrapper.querySelectorAll('.dropdown-item')

    if (!hiddenSelect || !dropdownButton) return

    // Sync visual state with hidden select on load
    if (hiddenSelect.selectedIndex > -1) {
      const selectedOption = hiddenSelect.options[hiddenSelect.selectedIndex]
      dropdownButtonSpan.textContent = selectedOption.text

      // Set active class
      dropdownItems.forEach((item) => {
        const isActive = item.getAttribute('data-value') === hiddenSelect.value
        item.classList.toggle('active', isActive)
      })
    }

    // Handle Item Click
    dropdownItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault()

        const value = item.getAttribute('data-value')
        const text = item.textContent.trim()

        // Update UI
        dropdownButtonSpan.textContent = text
        dropdownItems.forEach((i) => i.classList.remove('active'))
        item.classList.add('active')

        // Update Data
        hiddenSelect.value = value

        // Trigger Change Event
        hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }))
      })
    })
  })
}
