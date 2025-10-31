document.addEventListener('DOMContentLoaded', () => {
  // Navbar
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-button");
  const menuBtn = document.getElementById("menu-button");
  const cartModal = document.getElementById("cart-modal");
  const closeCartBtn = document.getElementById("close-cart-button");

  // Shop Section Tab Layout
  const categories = document.querySelectorAll('[data-tab-target]');
  const activeClass = "text-cyan-500 border-b-2 border-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:border-cyan-400 dark:hover:text-cyan-300";

  // This sets the first tab as active on page load
  categories[0].classList.add(...activeClass.split(' '));
  document.querySelector('#comfort').classList.add('hidden');
  document.querySelector('#fashion').classList.add('hidden');

  // This adds click event listeners to each tab
  categories.forEach(cat => {
    cat.addEventListener('click', () => {
      const target = document.querySelector(cat.dataset.tabTarget);
      // console.log(target);

      // Hide all tab contents and remove active classes from all tabs
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
      });

      // Remove the hidden class from the clicked tab-content
      target.classList.remove('hidden');

      // Add the active class to only the clicked tab and remove from others
      categories.forEach(t => {
        t.classList.remove(...activeClass.split(' '));
      });

      cat.classList.add(...activeClass.split(' '));
    });
  });

  // Product Card Render
  const products = {
  athletics: [
    {
      id: 1,
      name: "StepIn AirRunner Pro",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/e_gen_recolor:prompt_(background);to-color_C2C9D6;multiple_true/w_250/q_auto/f_auto/v1760453320/shoes-10_rj6uyt.jpg",
      price: 120,
      comfort: 5,
      description: "Lightweight running shoes designed for speed and breathability."
    },
    {
      id: 2,
      name: "StepIn Velocity Max",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/e_gen_recolor:prompt_(background);to-color_C2C9D6;multiple_true/w_250/q_auto/f_auto/v1760453320/shoes-18_eeioaq.jpg",
      price: 130,
      comfort: 4,
      description: "Cushioned sole with adaptive traction for all terrains."
    },
    {
      id: 3,
      name: "StepIn AeroFlex",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/e_gen_recolor:prompt_(background);to-color_C2C9D6;multiple_true/w_250/q_auto/f_auto/v1760453320/shoes-9_ip9zse.jpg",
      price: 115,
      comfort: 5,
      description: "Mesh upper with superior airflow for long-distance runs."
    },
    {
      id: 4,
      name: "StepIn SwiftEdge",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642148/shoes-17_ozo9jo.jpg",
      price: 125,
      comfort: 4, 
      description: "Responsive midsole with high-rebound foam for quick sprints."
    },
    {
      id: 5,
      name: "StepIn TurboTrail",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642155/shoes-12_lg8ljy.jpg",
      price: 135,
      comfort: 3,
      description: "Rugged outsole perfect for trail and mountain runners."
    },
    {
      id: 6,
      name: "StepIn GlideSport",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642156/shoes-13_qjpxpp.jpg",
      price: 110,
      comfort: 5,
      description: "Flexible design with arch support for everyday training."
    },
    {
      id: 7,
      name: "StepIn Enduro Pro",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642151/shoes-11_xuot4t.jpg",
      price: 140,
      comfort: 4,
      description: "Built for endurance athletes with shock-absorbing soles."
    },
    {
      id: 8,
      name: "StepIn SprintFlow",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761649281/shoes-26_mrlnxv.jpg",
      price: 100,
      comfort: 3,
      description: "Minimalist design focused on performance and lightness."
    }
  ],

  comfort: [
    {
      id: 1,
      name: "StepIn CloudEase",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1760453335/shoes-8_ncy9dy.jpg",
      price: 90,
      comfort: 5,
      description: "Plush memory foam insole for cloud-like comfort."
    },
    {
      id: 2,
      name: "StepIn CozyWalk",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1760453326/shoes-4_mui2j5.jpg",
      price: 85,
      comfort: 4,
      description: "Breathable cotton-linen blend ideal for casual days."
    },
    {
      id: 3,
      name: "StepIn RelaxFit",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1760453320/shoes-5_rxmjen.jpg",
      price: 95,
      comfort: 5,
      description: "Designed to reduce foot pressure and enhance support."
    },
    {
      id: 4,
      name: "StepIn SoftStride",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1760453322/shoes-7_bqimof.jpg",
      price: 80,
      comfort: 4,
      description: "Ergonomic midsole ideal for long hours of standing."
    },
    {
      id: 5,
      name: "StepIn BlissSlip",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1760453327/shoes-2_y0bx27.jpg",
      price: 75,
      comfort: 5,
      description: "Easy slip-on design with ultra-soft inner lining."
    },
    {
      id: 6,
      name: "StepIn Everyday",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761649265/shoes-23_ygsb3o.jpg",
      price: 70,
      comfort: 4,
      description: "Lightweight, flexible shoes for everyday wear."
    },
    {
      id: 7,
      name: "StepIn LoungeStep",
      image: "comfort-shoe-7.jpg",
      price: 85,
      comfort: 5,
      description: "Luxurious comfort for relaxed weekends and casual walks."
    },
    {
      id: 8,
      name: "StepIn CushionLite",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642148/shoes-20_fhb7i9.jpg",
      price: 90,
      comfort: 5,
      description: "Dual-density cushioning that adapts to every step."
    }
  ],

  fashion: [
    {
      id: 1,
      name: "StepIn Elegance",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1760453327/shoes-6_tmh3v8.jpg",
      price: 110,
      comfort: 4,
      description: "Sleek modern design for formal and semi-casual events."
    },
    {
      id: 2,
      name: "StepIn LuxeHeels",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642151/shoes-22_ouqble.jpg",
      price: 130,
      comfort: 3,
      description: "Stylish high heels with soft footbed padding."
    },
    {
      id: 3,
      name: "StepIn MetroWalk",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642149/shoes-16_hz1e3n.jpg",
      price: 105,
      comfort: 4,
      description: "Trendy sneakers for urban lifestyle and streetwear."
    },
    {
      id: 4,
      name: "StepIn UrbanChic",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761649299/shoes-27_qfczra.jpg",
      price: 95,
      comfort: 5,
      description: "Minimalist slip-ons for fashion-forward comfort."
    },
    {
      id: 5,
      name: "StepIn Classic",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761642142/shoes-15_edxdkj.jpg",
      price: 120,
      comfort: 4,
      description: "Timeless leather design that complements any outfit."
    },
    {
      id: 6,
      name: "StepIn Grace",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1760453331/shoes-3_z2nvzw.jpg",
      price: 115,
      comfort: 3,
      description: "Elegant low heels for graceful steps all day."
    },
    {
      id: 7,
      name: "StepIn TrendFlex",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761649270/shoes-25_bauojm.jpg",
      price: 100,
      comfort: 4,
      description: "Blends fashion with flexibility for all-day style."
    },
    {
      id: 8,
      name: "StepIn NoirEdge",
      image: "https://res.cloudinary.com/drfbfalpr/image/upload/w_250/q_auto/f_auto/v1761649289/shoes-24_ogstrc.jpg",
      price: 125,
      comfort: 3,
      description: "Black designer shoes with a bold, modern look."
    }
  ]
  };

  // Creating the Product Cards
  function productCard(product) {
    return `
      <div
      class="bg-gray-200 rounded-xl overflow-hidden shadow-2xl group flex flex-col w-full max-w-[250px] mx-auto dark:bg-gray-800"
    >
      <div class="overflow-hidden relative">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          class="w-full h-[120px] object-cover group-hover:scale-105 duration-500 transition-transform"
          onerror="this.onerror=null;this.src='https://placehold.co/600x330/94A3B8/ffffff?text=Image+Not+Found';"
        />
        <span
          class="absolute top-3 right-3 text-sm font-bold text-gray-700 px-3 py-1 rounded-full bg-cyan-400 shadow-md"
        >${product.comfort}</span>
      </div>
      <div class="p-5 flex flex-col grow">
        <h3 class="text-xl font-bold text-gray-900 mb-1 dark:text-white">${product.name}</h3>
        <p class="text-gray-700 text-lg font-medium mb-3 dark:text-white">$${product.price}</p>
      </div>
      <div class="mt-auto space-y-3">
        <button
          onclick="addToCart(${product.id}, '${product.name}')"
          class="w-full py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transi duration-150 shadow-lg active:scale-[0.98]"
        >
          Add to Cart
        </button>

        <button
          onclick="productModal(${product.id})"
          class="w-full py-3 text-cyan-600 border border-cyan-500 font-semibold rounded-xl hover:bg-cyan-500 hover:text-gray-100 transi duration-150 shadow-lg active:scale-[0.98] dark:text-cyan-100"
        >
          Product Details
        </button>
      </div>
    </div>
    `
  }

  // Rendering the Product Cards
  function renderProducts(category) {
    const container = document.querySelector(`[data-content="${category}"]`);
    if (container) {
      container.innerHTML = '';
      if (products[category] && products[category].length > 0) {
        const productHTMl = products[category].map(productCard).join('');
        container.innerHTML = productHTMl;
      } else {
        // container.classList.remove('grid');
        container.innerHTML = '<p class="text-gray-700 text-center">Sorry, there are no products available in this category.</p>';
      }
    }
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', hideCartModal);
  }
  if (cartModal) {
    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        hideCartModal();
      }
    });
  }

  renderProducts('athletics');
  renderProducts('comfort');
  renderProducts('fashion');
  renderCart();
});

function showSidebar() {
    sidebar.classList.remove('hidden');
  }
  
  function hideSidebar() {
    sidebar.classList.add('hidden')
  }

// Cart Modal
  let cart = [];

  // Add to Cart Function
  function renderCart() {
    const cartList = document.getElementById('cart-items-list');
    const cartCountBadge = document.getElementById('cart-count');
    const cartTotalItems = document.getElementById('cart-total-items');
    const cartGrandTotal = document.getElementById('cart-grand-total');

    if (!cartList || !cartCountBadge || !cartTotalItems || !cartGrandTotal) {
      console.error('Missing one or more cart rendering elements.');
      return;
    }

    let totalItems = 0;
    let GrandTotal = 0;
    let cartHtml = '';

    if (cart.length === 0) {
      cartHtml = '<p class="text-gray-500 text-center py-4">Your cart is currently empty.</p>';
    } else {
      cart.forEach(item => {
        cartHtml += createCartItemHtml(item);
        totalItems += item.quantity;
        GrandTotal += item.price * item.quantity;
      });
    }

    cartList.innerHTML = cartHtml;
    cartCountBadge.textContent = totalItems;
    cartTotalItems.textContent = totalItems;
    cartGrandTotal.textContent = `$${GrandTotal.toFixed(2)}`;
  }

  function removeItemFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    renderCart();
  }

  // Display Cart Modal
  function showCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
      renderCart();
      cartModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  // Hide Cart Modal
  function hideCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
      cartModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  // Helper function to get product details by ID
  function getProductById(id) {
    for (const category in products) {
      const product = products[category].find(p => p.id === id);
      if (product) return product;
    }
    return null;
  }

  function addToCart(productId, productName) {
    const productDetails = getProductById(productId);

    if (!productDetails) {
      console.error(`Attempted to add unknown product ID: ${productId}`);
      return;
    }

    // This checks if an item already exists in the cart
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        name: productName,
        quantity: 1,
        price: productDetails.price
      });
    }

    renderCart();
    console.log(`${productName} added to cart. Current cart:`, cart)

    alert(`Successfully added ${productName} to your cart!`);

    hideProductModal();
  }

  function createCartItemHtml(item) {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    const formattedPrice = item.price.toFixed(2);

    return `
    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
      <div class="flex-grow">
        <p class="font-semibold text-gray-900">${item.name}</p>
        <p class="text-sm text-gray-600">$${formattedPrice} x ${item.quantity}</p>
      </div>
      <div class="flex items-center space-x-4">
        <span class="font-bold text-lg text-brand-blue">$${itemTotal}</span>
        <button 
          onclick="removeItemFromCart(${item.productId})"
          class="text-red-500 hover:text-red-700 transition duration-150"
          aria-label="Remove ${item.name} from cart"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.86 12.14A2 2 0 0116.14 21H7.86a2 2 0 01-1.99-1.86L5 7m5 4v6m4-6v6M1 7h22" />
          </svg>
        </button>
      </div>
    </div>
    `;
  }