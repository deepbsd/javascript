app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Welcome to Angular.js, Dave!';
  $scope.promo = 'Hey, you should just buy this book.';
  $scope.products =
  [
    {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'http://www.bookoftrees.info/bt/images/cover_640.jpg',
    likes: 0,
    dislikes: 0
  	},
    {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'https://images-na.ssl-images-amazon.com/images/I/41a9KQkCMuL._SY344_BO1,204,203,200_.jpg',
    likes: 0,
    dislikes: 0
  	},
    {
      name: 'The Big Sleep',
      price: 15,
      pubdate: new Date('1939', '08', '01'),
      cover: 'https://images-na.ssl-images-amazon.com/images/I/512ofG2Cb%2BL.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'The Maltese Falcon',
      price: 15,
      pubdate: new Date('1929', '08', '01'),
      cover: 'https://secure.img1.wfcdn.com/lf/maxsquare/hash/18923/8314688/1/Buyenlarge-The-Maltese-Falcon-Graphic-Art-on-Wrapped-Canvas.jpg',
      likes: 0,
      dislikes: 0
    }
 	];
  $scope.plusOne = function(index){
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index){
    $scope.products[index].dislikes += 1;
  };

}]);
