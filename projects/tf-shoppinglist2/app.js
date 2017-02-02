;(function () {
	// Single state object
	var state = {
	    // items: ["<li class="checked" apples", "oranges", "_milk-checked", "bread"]
	    items: [
	    	{id: 1, title: 'Apples', checked: true},
	    	{id: 2, title: 'Bread', checked: false},
	    	{id: 3, title: 'Oranges', checked: false},
	    	{id: 4, title: 'Apples', checked: false}
	    ]
	};

	var shoppingListWrapper = $('.shopping-list-wrapper')

	// State modification functions
	var addItem = function(state, item) {
	    state.items.push(item);
	    console.log('addItem: '+item);
	};

	var checkedItem = function(state, item) {}

	// Render functions
	var renderList = function(state, element) {
		// var listItemTemplate = '<li><span class="@content-classes">@content</span></li>';
		// var startContainer = '<li> ';
		// var startSpan1 = '<span class="shopping-item">';
		// var startSpan2 = '<span class="shopping-item shopping-item__checked">'
		// var endContainer = '</span> <div class="shopping-item-controls"><button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>';
	 //    var itemsHTML = state.items.map(function(item) {
	 //    	console.log('renderList: '+startContainer+item+endContainer);
	 //        return startContainer + item + endContainer ;
	 //    });
	 //    element.html(itemsHTML);

	    var template = '<ul class="shopping-list">@contents</ul>';

	    var innerHTML = state.items.map(function (item) {
	    	return renderListItem(item)
	    }).join('')

	    element.html(template.replace('@contents', innerHTML))
		addCallbacks()
	};

	var renderListItem = function (item) {
		var template = '';
		// <li>
		//   <span class="shopping-item">apples</span>
		//   <div class="shopping-item-controls">
		//     <button class="shopping-item-toggle">
		//       <span class="button-label">check</span>
		//     </button>
		//     <button class="shopping-item-delete">
		//       <span class="button-label">delete</span>
		//     </button>
		//   </div><!-- /.shopping-item-toggle -->
		// </li>

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

	// Event listeners
	$('#js-shopping-list-form').submit(function(event) {
	    event.preventDefault();
	    addItem(state, $('#shopping-list-entry').val());

	    renderList(state, $('.shopping-list'));
	});


	var addCallbacks = function () {
		$('.shopping-item-toggle').click(toggleCheckButtonCallback)
	}

	var toggleCheckButtonCallback = function (ev) {
		var listItem = $(this).parent().parent()
		var itemID = parseInt(listItem.attr('data-item-id'))
		console.log('Clicked on ', itemID)

		for (var i = 0; i < state.items.length; i++) {
			var item = state.items[i]

			if (item.id === itemID) {
				item.checked = !item.checked
				break
			}
		}

		renderList(state, shoppingListWrapper)
	}
	
	renderList(state, shoppingListWrapper)
})()

