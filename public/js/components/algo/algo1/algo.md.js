import algo1 from './algo1/algo1'

let algoModule = angular.module('app.algo', [])
.component('algo1', algo1)
.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
	.state('algo.algo1', {
		url: 'algo1',
		template: '<algo1></algo1>'
	})
}])

export default algoModule