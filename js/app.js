$(document).ready(() => {
  // close search btn
  $(".close-btn").click(function () {
    // $(".search-item").removeClass("hide");
    if ($(this).hasClass("fa-search")) {
      $(this).removeClass("fa-search").addClass("fa-times");
      $(".search-item").removeClass("hide");
    } else {
      $(this).removeClass("fa-times").addClass("fa-search");
      $(".search-item").addClass("hide");
    }
  });

  // sticky header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 180) {
      $(".stick").addClass("stickey-header");
      // $('nav div').addClass('visible-title');
    } else {
      $(".stick").removeClass("stickey-header");
      // $('nav div').removeClass('visible-title');
    }
  });
  //cart
  let cart = [];
  let buttonsDom = [];
  let cartTotal = document.querySelector(".cart__total");
  let cartItem = document.querySelector(".bigcounter");
  let CartContent = document.querySelector("#cartContent");
  let clearCartBtn = document.querySelector(".clear-all-btn");
  // get all products
 

class Products {
    async getProducts() {
      //Array of all products
      let products = [
        {
          sys: { id: "1" },
          fields: {
            title: "Flowers Bouquet Pink",
            price: 100,
            delivery: 10,
            filter: "valentien-img",
            details:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/5_e83a8771-fcbf-4180-aab3-b198e0828839_grande.jpg?v=1533545131",
            },
          },
        },
        {
          sys: { id: "2" },
          fields: {
            title: "Evergreen Candytuft",
            price: 50,
            delivery: 10,
            filter: "valentien-img",
            details:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/6_21dd31a0-0b8e-4f0b-a9f9-b497b4961887_grande.jpg?v=1533545135",
            },
          },
        },
        {
          sys: { id: "3" },
          fields: {
            title: "Pearly Everlasting",
            price: 100,
            delivery: 10,
            filter: "valentien-img",
            details:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/7_a55fa9d0-e913-4819-a018-d31d7e003af7_grande.jpg?v=1533545141",
            },
          },
        },
        {
          sys: { id: "4" },
          fields: {
            title: "Polka Dot Plant",
            price: 30,

            delivery: 10,
            filter: "valentien-img",
            details:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/1_710403b2-3667-413e-bb0f-8f24edc3537a_grande.jpg?v=1533544879",
            },
          },
        },
        {
          sys: { id: "5" },
          fields: {
            title: "Pearly Everlasting",
            price: 30,

            delivery: 10,
            filter: "mother-day",
            details: "",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/8_babe402b-b618-48ae-a2e9-91edf1969c48_grande.jpg?v=1533544857",
            },
          },
        },
        {
          sys: { id: "6" },
          fields: {
            title: "Flowers Bouquet Pink",
            price: 150,
            delivery: 5,
            filter: "mother-day",
            details:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/3_5ed686d0-c62e-42fb-bc03-777601923eb7_grande.jpg?v=1533544611",
            },
          },
        },
        {
          sys: { id: "7" },
          fields: {
            title: "Glory Of The Snow",
            price: 150,
            delivery: 8,
            filter: "mother-day",
            details:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/2_9eeadf0b-b343-43b5-b0e6-b8e6733cb223_grande.jpg?v=1533544605",
            },
          },
        },
        {
          sys: { id: "8" },
          fields: {
            title: "Dutchman's Breeches",
            price: 50,
            delivery: 2,
            filter: "mother-day",
            details:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            image: {
              url:
                "//cdn.shopify.com/s/files/1/0021/5570/8489/products/4_1bc55002-bd95-4b1c-a37b-2bd5b7637675_grande.jpg?v=1533545126",
            },
          },
        },
      ];
      return products;
    }
  }
  // local storarge
  class Storage {
    static saveProducts(products) {
      localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id) {
      let products = JSON.parse(localStorage.getItem("products"));
      return products.find(product => product.sys.id === id);
    }
    static saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart() {
      return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    }
  }

  //display the products
  class UI {
    displayProduts(products) {
      let results = "";
      products.forEach(product => {
        results += `
       
        <div class="slider_container" data-containerId="${product.sys.id}">
        <img class="img-1 slider-img" src="${product.fields.image.url}" />
        <div class="carousel-img-des">
          <span class="details">
            ${product.fields.title}
          </span>
          <span class="price">
            $${product.fields.price}
          </span>
          <button class="book-btn">Book now</button>
          <i class="fas fa-shopping-bag bag-icon" data-id="${product.sys.id}"></i>
        </div>
      </div>
        `;
        $(".carouselbox1").html(results);
      });
      function showMoviesData1() {
        scrollPerClick1 = document.querySelector(".img-1").clientWidth + 20;
      }
      showMoviesData1();
    }
    getBagBtn() {
      const btns = [...document.querySelectorAll(".bag-icon")];
      buttonsDom = btns;
      btns.forEach(button => {
        let id = button.dataset.id;
        let inCart = cart.find(item => item.sys.id === id);
        if (inCart) {
          button.classList.remove("fa-shopping-bag");
          button.classList.add("fa-check-circle");
          // button.innerText = "in Cart";
          // button.disabled = true;
        } else {
          button.addEventListener("click", e => {
            if (e.target.classList.contains("fa-check-circle")) return;
            // e.target.innerText = "In Cart";
            button.classList.remove("fa-shopping-bag");
            button.classList.add("fa-check-circle");
            // e.target.disabled = true;
            //get propduct from products
            let cartItem = { ...Storage.getProduct(id), amount: 1 };
            //add product to the cart
            cart = [...cart, cartItem];
            //save cart in local storage
            Storage.saveCart(cart);
            //set set cart values
            this.seCartValues(cart);
            //display cart item
            this.addCartItem(cartItem);
          });
        }
      });
    }
    seCartValues(cart) {
      let temTotal = 0;
      let itemsTotal = 0;
      cart.map(item => {
        temTotal += item.fields.price * item.amount;
        itemsTotal += item.amount;
      });
      cartTotal.innerText = parseFloat(temTotal.toFixed(2));
      cartItem.innerText = itemsTotal;
    }
    addCartItem(item) {
      const div = document.createElement("div");
      div.classList.add("container-fluid");
      div.classList.add("pt-2");
      div.innerHTML = `
      <div class="row">
      <div class="col-6">
        <img src="${item.fields.image.url}" class="img-fluid" alt="${item.fields.title}"> 
      </div>
      <div class="col-6 flower-modal-desc">
      <div class="cart-modal-header">
        <h5>${item.fields.title}</h5>
      </div>
        <div class="cart-modal-price">
          <h5>Price:</h5><span>$${item.fields.price}</span></h5>              
        </div>
        <div class="cart-modal-price">
              
      </div>
             
        <div class="cart-modal-amount">
          <h5>amount</h5>
          <div class="up-down">
            <i class="fas fa-chevron-up" data-id=${item.sys.id}></i>
            <p class ="item-amount" >${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.sys.id}></i>
          </div>
        </div>
        <span class="remove-item" data-id="${item.sys.id}">remove</span>
      </div>
    </div>
      `;
      CartContent.appendChild(div);
    }
    setUpApp() {
      cart = Storage.getCart();
      this.seCartValues(cart);
      this.populateCart(cart);
    }
    populateCart(cart) {
      cart.forEach(item => this.addCartItem(item));
    }
    cartLogic() {
      clearCartBtn.addEventListener("click", () => {
        this.clearCart();
      });
      CartContent.addEventListener("click", e => {
        if (e.target.classList.contains("remove-item")) {
          let removeItem = e.target;
          let id = removeItem.dataset.id;
          CartContent.removeChild(
            removeItem.parentElement.parentElement.parentElement
          );
          this.removeItem(id);
        } else if (e.target.classList.contains("fa-chevron-up")) {
          let addAmount = e.target;
          let id = addAmount.dataset.id;
          let tempItem = cart.find(item => item.sys.id === id);
          tempItem.amount = tempItem.amount + 1;
          Storage.saveCart(cart);
          this.seCartValues(cart);
          addAmount.nextElementSibling.innerText = tempItem.amount;
        } else if (e.target.classList.contains("fa-chevron-down")) {
          let lowerAmount = e.target;
          let id = lowerAmount.dataset.id;
          let tempItem = cart.find(item => item.sys.id === id);
          tempItem.amount = tempItem.amount - 1;
          if (tempItem.amount > 0) {
            Storage.saveCart(cart);
            this.seCartValues(cart);
            lowerAmount.previousElementSibling.innerText = tempItem.amount;
          } else {
            CartContent.removeChild(
              lowerAmount.parentElement.parentElement.parentElement
                .parentElement.parentElement
            );
            this.removeItem(id);
          }
        }
      });
    }
    clearCart() {
      let carItems = cart.map(item => item.sys.id);
      carItems.forEach(id => this.removeItem(id));
      while (CartContent.children.length > 0) {
        CartContent.removeChild(CartContent.children[0]);
      }
    }
    removeItem(id) {
      cart = cart.filter(item => item.sys.id !== id);
      this.seCartValues(cart);
      Storage.saveCart(cart);
      let button = this.getSigleBtn(id);
      // button.diabled = false;
      button.classList.remove("fa-check-circle");
      button.classList.add("fa-shopping-bag");
    }
    getSigleBtn(id) {
      return buttonsDom.find(button => button.dataset.id === id);
    }
  }

  const ui = new UI();
  const products = new Products();
  ui.setUpApp();
  // get all products
  products
    .getProducts()
    .then(product => {
      ui.displayProduts(product);
      Storage.saveProducts(product);
    })
    .then(() => {
      ui.getBagBtn();
      ui.cartLogic();
    });

  // Slider
  $(".switchLeft").click(sliderScrollLeft1);
  $(".switchRight").click(sliderScrollRight1);
  const sliders1 = document.querySelector(".carouselbox1");
  let scrollPerClick1;
  let ImagePadding = 20;

  // Scroll Functionality
  let scrollAmount1 = 0;

  function sliderScrollLeft1() {
    sliders1.scrollTo({
      top: 0,
      left: (scrollAmount1 -= scrollPerClick1),
      behavior: "smooth",
    });

    if (scrollAmount1 < 0) {
      scrollAmount1 = 0;
    }
  }

  function sliderScrollRight1() {
    if (scrollAmount1 <= sliders1.scrollWidth - sliders1.clientWidth) {
      sliders1.scrollTo({
        top: 0,
        left: (scrollAmount1 += scrollPerClick1),
        behavior: "smooth",
      });
      console.log(scrollAmount1, scrollPerClick1);
    }
  }
});
