


class Something {
	/**
	 * 
	 * Cupcake stuff
	 * @param {string} location - A string to represent the location
	 * 
	 */

	constructor(location) {
		this.location = location;
	}

	/**
	 *  Used to add a batch of cupcakes to the shops inventory
	 * @param {*} batter 
	 * @param {*} icing 
	 * @param {*} count 
	 * @param {*} pricePerCupcake 
	 */
	backBatch(batter, icing, count, pricePerCupcake) {
		for (let i = 0; i < count; i++) {
			let newCupcake = new Cupcake(batter, icing, pricePerCake)
			this.addToInventory(newCupcake)
		}
	}
}
