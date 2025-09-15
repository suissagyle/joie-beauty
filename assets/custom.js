// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  setTimeout(function () {
    // Select the currency element
    const currencyEl = document.querySelector(".pick_currency.mldesk");
    // Select the footer (adjust the selector if needed)
    const footer = document.querySelector("footer .currency-wrap");

    // Move the element to the end of the footer
    if (currencyEl && footer) {
      footer.appendChild(currencyEl);
    }
  }, 3500); // 2000ms = 2 seconds


  setTimeout(() => {
    const colorLabel = document.querySelector('.PwzrGrid-root-1720 .PwzrGrid-item-1722 > div');
    if (colorLabel) {
      // Remove "Color:" text while keeping the span element
      colorLabel.innerHTML = colorLabel.innerHTML.replace('Color: ', '');
    }
  }, 2000);



 const observer = new MutationObserver(() => {
    const seasonBlock = document.querySelector('[data-option="Season"]');
    const productTitle = document.querySelector('h1.product__title');

    if (seasonBlock && productTitle && !seasonBlock.nextElementSibling?.contains(productTitle)) {
      seasonBlock.insertAdjacentElement('afterend', productTitle);
      observer.disconnect(); // Stop observing once done
    }

     const colorLabel = document.querySelector('.PwzrGrid-root-1720 .PwzrGrid-item-1722 > div');
      if (colorLabel) {
        // Remove "Color:" text while keeping the span element
        colorLabel.innerHTML = colorLabel.innerHTML.replace('Color: ', '');
      }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  
});



