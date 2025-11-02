# 👟 StepIn — Frontend Project (TailwindCSS)

This is a single-page, **mobile-first web application** designed to showcase a fictional sneaker catalog. It is a website I decided to use to practice TailwindCSS.  
It includes core e-commerce features like product catalog browsing, detailed product modals, and a functioning shopping cart with real-time updates.

---

## ✨ Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports using a fluid layout.
- **Product Catalog:** Products organized into three categories — _Athletics_, _Comfort_, and _Fashion_ — via an interactive tab system.
- **Shopping Cart:** A client-side cart that allows users to add or remove items and calculates the subtotal and grand total in real time.
- **Modal Popups:** Interactive modals for detailed product information and cart overview.
- **Accessibility (A11y):** Enhanced with ARIA roles and attributes for improved navigation and screen reader compatibility.
- **Styling:** Built with **Tailwind CSS**, providing a modern and visually appealing UI.

---

## 💻 Technologies Used

This project is fully self-contained within a single `index.html` file and relies only on CDN-hosted resources.

- 🧱 **HTML5** — Structure and semantics
- 🎨 **Tailwind CSS (via CDN)** — Utility-first styling
- ⚙️ **JavaScript (Vanilla ES6)** — Handles state management, DOM manipulation, and event logic

---

## 🔑 Key Code Functions

| Function                                | Purpose                                                                                          |
| --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **`addToCart(productId, productName)`** | Adds a product to the global cart array, updating quantities if already present.                 |
| **`renderCart()`**                      | Updates cart totals and dynamically refreshes the modal and cart badge.                          |
| **`showCartModal()`**                   | Displays the shopping cart modal and triggers `renderCart()` to ensure the latest data is shown. |
| **`showProductModal(productId)`**       | Loads and displays detailed product information inside a modal.                                  |

---

## ✅ Accessibility Summary

Accessibility has been thoughtfully integrated with the following ARIA practices:

- **Live Region:**  
  The cart count badge uses `role="status"` and `aria-live="polite"` so screen readers announce changes when items are added.

- **Modal Dialogs:**  
  Both modals use `role="dialog"` and `aria-modal="true"`, trapping focus inside and preventing background interaction.

- **Tabbing:**  
  The category tabs are implemented with `role="tablist"`, each button using `role="tab"` and dynamic `aria-selected` attributes.

---

## 🧑‍💻 Author

**Kamil Jamiu**  
📍 Frontend Developer | JavaScript & Tailwind CSS Enthusiast

- GitHub: [@jkamil-dev](https://github.com/jkamil-dev)
- Twitter: [@jkamil_dev](https://twitter.com/jkamil_dev)

---

## 🪪 License

This project is open source under the [MIT License](LICENSE).

---

> “Redefine your every step — experience sneakers in a new way.”
