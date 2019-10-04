var app = new Vue({
    // Where the Vue object is pointing. The is in <div> tag where id = "app"
    el: '#app',

    // Data object with one key of message which is refered to within the div tag
    data: {
        message: 'Hello Vue!',
        // Will display the message if seen is true, will not if seen is false
        seen: true,
        // Creates an ordered list to be displayed
        groceries: [
            { item: 'bagel' },
            { item: 'orange' },
            { item: 'tofu' }
        ]
    },
    // Defining functions seperately from data
    methods: {
        // Syntax for defining a function
        // Add another exclamation point to message
        addExclamation: function(item) {
            this.message = this.message + '!';
        }
    }
    
});

// Change the value of message. html will now display this string
app.message = "I have changed the message";
// Set to false to no longer display message
//app.seen = false;

// Add item to grocies to be displayed in list
app.groceries.push({ item: 'walnuts'});

