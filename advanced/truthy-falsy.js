const products = []
const product = products[0];

//truthy - values hat resolve to true in a boolean context
//falsy - values that resolve to false in a boolean context
//falsy values = false, 0, empty string, null, undefined

if (product) {
    console.log('Product found');
} else {
    console.log('Products not found');
}