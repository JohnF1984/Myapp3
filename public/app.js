var babyApp = angular.module('BabyAdventuresApp', ['ngRoute','myApp.home',
  'myApp.register']);


   babyApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
                  .when('/facilities', {
            templateUrl: 'partials/facilities-list.html',
            controller: 'FacilitiesListCtrl'
          })
           .when('/facilities/:Facility_id/Details', {
            templateUrl: 'partials/facilities-detail.html',
            controller: 'DetailsDetailCtrl'
          })
           .when('/posts', {
            templateUrl: 'partials/feedback.html',
            controller: 'PostsController'
          })
          .when('/posts/:post_id/comments',
          {
              controller: 'CommentsController',
              templateUrl: 'partials/comments.html'
          })
          .when('/about',
          {
              templateUrl: 'partials/about.html'
          })
          .when('/add',
          {
              templateUrl: 'partials/add.html',
              controller: 'AddController'
          })
          .when('/landing',
          {
              templateUrl: 'partials/landing.html'
          })
          .when('/menu',
          {
              templateUrl: 'partials/admin-menu.html'
          })
          .when('/deleteposts',
          {
              controller: 'DeletePostsController',
              templateUrl: 'partials/delete-post.html'
          })
           .when('/deletesuggestions',
          {
              controller: 'DeletesuggestionsController',
              templateUrl: 'partials/delete-Adds.html'
          })
           .when('/deletecomments',
          {
              controller: 'deletecommentsController',
              templateUrl: 'partials/edit-comments.html'
          })
           .when('/deletefacilities',
          {
              controller: 'DeleteFacilitiesController',
              templateUrl: 'partials/delete-facilities.html'
          })
           .when('/addfacilities',
          {
              controller: 'AddFacilitiesController',
              templateUrl: 'partials/add-facilities.html'
          })
           .when('/adddetails',
          {
              controller: 'AdddetailsController',
              templateUrl: 'partials/add-details.html'
          })
           .when('/editdetails',
          {
              controller: 'EditDetailsController',
              templateUrl: 'partials/edit-details.html'
          })
          .otherwise({
            redirectTo: '/landing'
          });
      }]);




     babyApp.controller('FacilitiesListCtrl', ['$scope', 'FacilityService',
          function($scope, FacilityService) {
             FacilityService.getFacilities().success(function(posts) {
                   $scope.Facilities = posts
           $scope.incrementUpvotes = function(post) {
               FacilityService.upvoteFacilities(post._id, post.upvotes + 1 )
          .success(function(updated_post) {
              post.upvotes = updated_post.upvotes
          })
    }
                })
               $scope.orderProp = '-upvotes';
}])


babyApp.controller('AddFacilitiesController', ['$scope','FacilityService', 
           function($scope,FacilityService) {
             FacilityService.getFacilities().success(function(posts) {
                   $scope.Facilities = posts
        });

          $scope.addFacility = function(){
          var post = {
            _id: $scope.newFacility._id,
            name: $scope.newFacility.name,
            location: $scope.newFacility.location,
            town: $scope.newFacility.town,
            county: $scope.newFacility.county,
            phoneno: $scope.newFacility.phoneno,
            imageUrl: $scope.newFacility.imageUrl,
            Details : [],
            upvotes: 0,
          }
          FacilityService.addFacility(post)
          .success(function(added_post) {
             $scope.Facility.push(added_post);
             $scope.newFacility = { }
          });
    }
}]) 

        babyApp.controller('DetailsDetailCtrl', [
      '$scope', 
      'FacilityService', 
      '$routeParams',
       function ($scope,FacilityService ,$routeParams) {
    FacilityService.getFacility($routeParams.Facility_id)
        .success(function(post) {
             $scope.Facility = post;
        });
    }])

babyApp.controller('DeleteFacilitiesController', [
      '$scope', 
      '$http',   
      function($scope, $http) { 
    $http.get('/api/facility').success(function(posts) {
        $scope.posts = posts;
    });
    
      $scope.deleteFacility = function(post,index) {
          post.state = "deleted";
         }
      $scope.undoDelete = function(post) {
         post.state = "normal";
      }
      
      $scope.confirmDelete = function(index) {
    $http.delete('/api/facility/' + $scope.posts[index]._id)
    .success(function() {
            $scope.posts.splice(index, 1) 
     });
  }
}])

    



    babyApp.controller('PostsController', ['$scope','FacilityService', 
           function($scope,FacilityService) {
              FacilityService.getPosts()
              .success(function(posts) {
             $scope.posts = posts;
        });
              $scope.incrementUpvotes = function(post) {
               FacilityService.upvotePost(post._id, post.upvotes + 1 )
          .success(function(updated_post) {
              post.upvotes = updated_post.upvotes
          })
    }


          $scope.addPost = function(){
          var post = {
            type: $scope.newPost.type,
            title: $scope.newPost.title,
            location: $scope.newPost.location,
            town: $scope.newPost.town,
            county: $scope.newPost.county,
            feedback: $scope.newPost.feedback,
            username : $scope.newPost.username,
            comments : [],
            upvotes: 0,
          }
          FacilityService.addPost(post)
          .success(function(added_post) {
             $scope.posts.push(added_post);
             $scope.newPost = { }
          });
    }
}]) 

babyApp.controller('AdddetailsController', ['$scope','FacilityService', 
           function($scope,FacilityService) {
              FacilityService.getDetails()
              .success(function(posts) {
             $scope.posts = posts;
        });

          $scope.addDetail = function(){
          var post = {
            _id: $scope.newDetail._id,
            locationOpening: $scope.newDetail.locationOpening,
            locationParking: $scope.newDetail.locationParking,
            locationlink: $scope.newDetail.locationlink,
            locationtype: $scope.newDetail.locationtype,
            directionsHow: $scope.newDetail.directionsHow,
            description: $scope.newDetail.description,
            nearbyplayground: $scope.newDetail.nearbyplayground,
            nearbyshop: $scope.newDetail.nearbyshop,
            nearbypetrol: $scope.newDetail.nearbypetrol,
            nearbygarda: $scope.newDetail.nearbygarda,
            nearbychurch: $scope.newDetail.nearbychurch,
            images: $scope.newDetail.images,
            images1: $scope.newDetail.images1,
            name: $scope.newDetail.name,
            facilitiesprivate: $scope.newDetail.facilitiesprivate,
            facilitiesbabychanging: $scope.newDetail.facilitiesbabychanging,
            facilitieseating: $scope.newDetail.facilitieseating,
            facilitieshighchair: $scope.newDetail.facilitieshighchair
          }
          FacilityService.addDetail(post)
          .success(function(added_post) {
             $scope.posts.push(added_post);
             $scope.newDetail = { }
          });
    }
}]) 

babyApp.controller('DeletePostsController', [
      '$scope', 
      '$http',   
      function($scope, $http) { 
    $http.get('/api/posts').success(function(posts) {
        $scope.posts = posts;
    });
    
      $scope.deletePost = function(post,index) {
          post.state = "deleted";
         }
      $scope.undoDelete = function(post) {
         post.state = "normal";
      }
      
      $scope.confirmDelete = function(index) {
    $http.delete('/api/posts/' + $scope.posts[index]._id)
    .success(function() {
            $scope.posts.splice(index, 1) 
     });
  }
}])

babyApp.controller('DeletesuggestionsController', [
      '$scope', 
      '$http',   
      function($scope, $http) { 
    $http.get('/api/Adds').success(function(posts) {
        $scope.Adds = posts;
    });
    
      $scope.deleteAdds = function(post,index) {
          post.state = "deleted";
         }
      $scope.undoDelete = function(post) {
         post.state = "normal";
      }
      
      $scope.confirmDelete = function(index) {
    $http.delete('/api/Adds/' + $scope.Adds[index]._id)
    .success(function() {
            $scope.Adds.splice(index, 1) 
     });
  }
}])

babyApp.controller('deletecommentsController', [
      '$scope', 
      '$http',   
      function($scope, $http) { 
    $http.get('/api/posts').success(function(posts) {
        $scope.posts = posts;
    });
     $scope.deletePost = function(post,index) {
          post.state = "deleted";
         }
      $scope.undoDelete = function(post) {
         post.state = "normal";
      }
      
     $scope.confirmDelete = function(index) {
    $http.delete('/api/posts/' + $scope.posts[index]._id)
    .success(function() {
            $scope.posts.splice(index, 1) 
     });
  }
}])



babyApp.controller('EditDetailsController', [
      '$scope', 
      '$http',   
      function($scope, $http) { 
    $http.get('/api/Details').success(function(posts) {
        $scope.posts = posts;
    });
    $scope.editDetail = function(post) {
        post.oldposts = post.post;
        post.state = "edit";
      }

     $scope.saveDetail = function(post) {
        $http.put('/api/Details/' + post._id, post)
            .success(function(updated_post) {
                  post.state = "normal";
            });
    }

      $scope.cancelEdit = function(post) {
        post.detail = post.oldDetail;
        post.state = "normal";
      } 
       $scope.deleteDetail = function(post,index) {
          post.state = "deleted";
         }
      $scope.undoDelete = function(post) {
         post.state = "normal";
      }
      
      $scope.confirmDelete = function(index) {
    $http.delete('/api/Details/' + $scope.posts[index]._id)
    .success(function() {
            $scope.posts.splice(index, 1) 
     });
  }

}])


    babyApp.controller('CommentsController', [
      '$scope', 
      'FacilityService', 
      '$routeParams',
       function ($scope,FacilityService ,$routeParams) {
    FacilityService.getPost($routeParams.post_id)
        .success(function(post) {
             $scope.post = post;
        });

    $scope.incrementUpvotes = function(comment) {
       FacilityService.upvotePostComment($scope.post._id, comment._id , 
                comment.upvotes + 1 )
          .success(function(updated_comment) {
              comment.upvotes = updated_comment.upvotes
          })
    }
    $scope.addComment = function(){
            if($scope.comment.body === '') { return; }
            var comment = {
                body: $scope.comment.body,
                author: $scope.comment.author
            }
            FacilityService.addPostComment($scope.post._id, comment )
                .success(function(added_comment) {
                    $scope.post.comments.push(added_comment)
                    $scope.comment = {} ;   
                })
    }
}])





babyApp.controller('AddController', ['$scope','FacilityService', 
           function($scope,FacilityService) {
              FacilityService.getAdds()
              .success(function(posts) {
             $scope.Adds = posts;
        });
              $scope.incrementUpvotes = function(post) {
               FacilityService.upvoteAdds(post._id, post.upvotes + 1 )
          .success(function(updated_post) {
              post.upvotes = updated_post.upvotes
          })
    }


          $scope.addAdds = function(){
          var post = {
            location: $scope.newAdds.location,
            town: $scope.newAdds.town,
            county: $scope.newAdds.county,
            username : $scope.newAdds.username,
            upvotes: 0,
          }
          FacilityService.addAdds(post)
          .success(function(added_post) {
             $scope.Adds.push(added_post);
             $scope.newAdds = { }
          });
    }
}]) 





    babyApp.factory('FacilityService', ['$http' , function($http){
         var api = {
     getPosts : function() {
           return $http.get('/api/posts')
     },
     addPost : function(post) {
          return $http.post('/api/posts',post)
     },
     addPostComment : function(post_id, comment) {
          return $http.post('/api/posts/' + post_id + '/comments' ,
                            comment)
     },
     upvotePost : function(post_id, new_upvote_count ) {
          return $http.post('/api/posts/' + post_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     upvotePostComment : function(post_id, comment_id, new_upvote_count ) {
          return $http.post( '/api/posts/' +
                      post_id + '/comments/' +  comment_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     getPost : function(post_id) {
        return $http.get('/api/posts/' + post_id )
     },
     getAdds : function() {
           return $http.get('/api/Adds')
     },
     addAdds : function(post) {
          return $http.post('/api/Adds',post)
     },
     upvoteAdds : function(post_id, new_upvote_count ) {
          return $http.post('/api/Adds/' + post_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     getFacilities : function() {
        return $http.get('/api/Facility')            
     },
     getFacility : function(post_id) {
        return $http.get('/api/Details/' + post_id)           
     },
     getDetails: function(post) {
        return $http.get('/api/Details/')           
     },
     addFacility : function(post) {
        return $http.post('/api/Facility',post)           
     },
     addDetail : function(post) {
        return $http.post('/api/Details',post)           
     },
     upvoteFacilities : function(post_id, new_upvote_count ) {
          return $http.post('/api/facility/' + post_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
  }
  return api
}])

