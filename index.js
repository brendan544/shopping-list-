document.addEventListener("DOMContentLoaded", function() {
    // Array to store shopping list items
    let shoppingList = [shoes,books,pens,sweater];
  
    // Get references to DOM elements
    const addItemBtn = document.getElementById("addItemBtn");
    const itemInput = document.getElementById("itemInput");
    const itemList = document.getElementById("itemList");
    const markPurchasedBtn = document.getElementById("markPurchasedBtn");
    const clearListBtn = document.getElementById("clearListBtn");
  
    // Function to render shopping list
    function renderShoppingList() {
      itemList.innerHTML = ""; // Clear existing list items
  
      shoppingList.forEach(function(itemText, index) {
        // Create list item
        const newItem = document.createElement("li");
        newItem.className = "item";
        newItem.textContent = itemText;
  
        // Create button to mark as purchased
        const markButton = document.createElement("button");
        markButton.textContent = "Mark";
        markButton.addEventListener("click", function() {
          newItem.classList.toggle("purchased");
        });
  
        // Append mark button to list item
        newItem.appendChild(markButton);
  
        // Append list item to list
        itemList.appendChild(newItem);
      });
    }
  
    // Event listener for Add button
    addItemBtn.addEventListener("click", function() {
      const itemValue = itemInput.value.trim();
  
      if (itemValue !== "") {
        shoppingList.push(itemValue); // Add item to array
        renderShoppingList(); // Render updated shopping list
        itemInput.value = ""; // Clear input field
      }
    });
  
    // Event listener for Mark Purchased button (mark all as purchased)
    markPurchasedBtn.addEventListener("click", function() {
      const items = document.getElementsByClassName("item");
      Array.from(items).forEach(function(item) {
        item.classList.add("purchased");
      });
    });
  
    // Event listener for Clear List button
    clearListBtn.addEventListener("click", function() {
      shoppingList = []; // Clear the array
      renderShoppingList(); // Clear the displayed list
    });
  
    // Initial render of shopping list
    renderShoppingList();
  });