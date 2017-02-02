

// Single state object
var state = {
    items: ["apples", "oranges", "milk", "bread"]
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
    console.log('addItem: '+item);
};

// Render functions
var renderList = function(state, element) {
	console.log(element);
	var startContainer = '<li> <span class="shopping-item">';
	var endContainer = '</span> <div class="shopping-item-controls"><button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>';
    var itemsHTML = state.items.map(function(item) {
    	console.log('renderList: '+startContainer+item+endContainer);
        return startContainer + item + endContainer ;
    });
    element.html(itemsHTML);
};

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

