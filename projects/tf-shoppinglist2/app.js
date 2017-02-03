;(function () {

/*
Notes: Have to handle the following problems:
1. throwing type errors when adding to a list that's been shortened.  
Perhaps the problem is that it doesn't get the actual length of the object
before the 'end' variable gets assigned.  Or it gets a bogus number.
*/


	// #######################
	// Single state object
	var state = {
	    // items: ["<li class="checked" apples", "oranges", "_milk-checked", "bread"]
	    items: [
	    	{id: 1, title: 'Apples', checked: true},
	    	{id: 2, title: 'Bread', checked: false},
	    	{id: 3, title: 'Oranges', checked: false},
	    	{id: 4, title: 'Grapes', checked: false},
	    	{id: 5, title: 'Cherries', checked: true},
	    	{id: 6, title: 'Soda', checked: false},
	    	{id: 7, title: 'Coffee', checked: false},
	    	{id: 8, title: 'Napkins', checked: false}
	    ]
	};

	var shoppingListWrapper = $('.shopping-list-wrapper');

	//  ###########################
	// State modification functions
	var addItem = function(state, item) {
		var last = state.items.length;
		console.log('length of items: '+state.items.length);
		var end = state.items[last-1].id;
		console.log(end+' is last id number');
		var newItem = { id: end+1, title: item, checked: false };
	    state.items.push(newItem);
	    console.log('added '+newItem.title);
	    renderList(state, shoppingListWrapper);
	};

	var deleteItem = function(ev) {
		var listItem = $(this).parent().parent();
		var itemID = parseInt(listItem.attr('data-item-id'));

		for (var n=0; n<state.items.length; n++) {
			var item = state.items[n];
			//console.log('looking at item: '+state.items[n].title)
			try {
				if (item.id === itemID) {
					console.log("deleting "+item.title);
					delete state.items[n];
				}
			}
			catch (e) {
					console.log(e);
					continue;				
			}
			//renderList(state, shoppingListWrapper);
		}

		renderList(state, shoppingListWrapper);
	};

	var toggleCheckButtonCallback = function (ev) {
		var listItem = $(this).parent().parent();
		var itemID = parseInt(listItem.attr('data-item-id'));
		console.log('Clicked on ', itemID-1);

		for (var n=0; n<state.items.length; n++) {
			var item = state.items[n];
			console.log(itemID+': '+item.id+' Name: '+item.title);

			if (item.id === itemID) {
				item.checked = !item.checked;
				break;
			}
			renderList(state, shoppingListWrapper);
		}

		renderList(state, shoppingListWrapper);
	}


	// #####################
	// Render functions
	var renderList = function(state, element) {


	    var template = '<ul class="shopping-list">@contents</ul>';

	    var innerHTML = state.items.map(function (item) {
	    	return renderListItem(item)
	    }).join('')

	    element.html(template.replace('@contents', innerHTML))
		addCallbacks()
	};

	var renderListItem = function (item) {
		var template = '';
		template += '<li data-item-id="@item-id">';
		template += '<span class="@classes">@content</span>';
		template += '<div class="shopping-item-controls">';
		template += '<button class="shopping-item-toggle">';
		template += '<span class="button-label">check</span>';
		template += '</button>';
		template += '<button class="shopping-item-delete">';
		template += '<span class="button-label">delete</span>';
		template += '</button>';
		template += '</div>';
		template += '</li>';

		var classes = ['shopping-item'];
		if (item.checked) {
			classes.push('shopping-item-checked');
		}

		return template
			.replace('@item-id', item.id)
			.replace('@classes', classes.join(' '))
			.replace('@content', item.title)
	}

	// ########################
	// Event listeners
	$('#js-shopping-list-form').submit(function(ev) {
	    ev.preventDefault();
	    addItem(state, $('#shopping-list-entry').val());

	    renderList(state, $('.shopping-list'));
	});


	var addCallbacks = function () {
		$('.shopping-item-toggle').click(toggleCheckButtonCallback);
		$('.shopping-item-delete').click(deleteItem);
	}

	
	renderList(state, shoppingListWrapper);
})()

