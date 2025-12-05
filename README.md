# Animated Custom Bootstrap DDL

[**🔴 Live Demo**](https://khaled-abdelbaset.github.io/animated-ddl/)

## What is this?

A styled, RTL-ready Dropdown List (DDL) component for Bootstrap 5. It features a custom expanding underline animation on click and a flipping SVG arrow icon. The visual dropdown automatically syncs with a hidden `<select>` element, making it ready for standard form submissions without complex configuration.

## How to Use

1. **Include Files**: Add `style.css` and `script.js` to your project (ensure Bootstrap 5 is loaded).
2. **HTML Structure**: Copy the code below. The script automatically handles the rest.

```html
<div class="form-group w-100 position-relative">
  <!-- 1. The Real Input (Hidden) -->
  <select name="mySelect" class="form-select d-none">
    <option value="">Select Option</option>
    <option value="1">Option 1</option>
  </select>

  <!-- 2. The Custom Visual Dropdown -->
  <div class="dropdown custom-dropdown-wrapper">
    <button
      class="btn dropdown-toggle w-100"
      type="button"
      data-bs-toggle="dropdown"
    >
      <span>Select Option</span>
    </button>
    <ul class="dropdown-menu w-100">
      <li>
        <a class="dropdown-item" href="javascript:void(0);" data-value=""
          >Select Option</a
        >
      </li>
      <li>
        <a class="dropdown-item" href="javascript:void(0);" data-value="1"
          >Option 1</a
        >
      </li>
    </ul>
  </div>
</div>
```
