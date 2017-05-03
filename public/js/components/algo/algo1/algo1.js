'use strict'

let algo1 = {
	templateUrl: 'js/components/algo/algo1/algo.template.html',
	controller: ['$stateParams', '$state', function($stateParams, $state) {

		this.friends = ["Ryan", "Kieran", "Mark"]
		let bestFriends = []

		function findFriends(friends) {
			friends.forEach( function(friend) {
				if(friend.length === 4) {
					return bestFriends.push(friend)
				}
			})
		}

		findFriends(this.friends)
		this.find = bestFriends
	}]
}
export default algo1