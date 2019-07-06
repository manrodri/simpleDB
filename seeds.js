var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "onecdiet proin fermentum.is egestas sed tempus urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Mattis pellentesque id nibh tortor id aliquet lectus. Interdum velit laoreet id donec. Mi sit amet mauris commodo quis imperdiet massa. Turpis egestas integer eget aliquet nibh praesent tristique magna. Dui faucibus in ornare quam.Proin sed libero enim sed faucibus turpis in eu. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sit amet nisl purus in moll quam elementum pulvinar etiam non quam lacus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Non blandit massa enim nec dui nunc mattis enim ut. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Eu sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Id faucibus nisl tincidunt eget. Odio facilisis mauris sit amet massa vitae tortor condimentum.Eu sem integer vitae justo. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Pellentesque habitant morbi tristique senectus et netus et. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Risus quis varius quam quisque id diam vel quam elementum. Nibh nisl condimentum id venenatis a. Scelerisque felis imperdiet proin fermentum leo vel. Ultrices in iaculis nunc sed. Nulla posuere sollicitudin aliquam ultrices sagittis. Odio tempor orci dapibus ultrices. Vel fringilla est ullamcorper eget nulla facilisi. Non tellus orci ac auctor. Eu facilisis sed odio morbi quis."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
        description: "onecdiet proin fermentum.is egestas sed tempus urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Mattis pellentesque id nibh tortor id aliquet lectus. Interdum velit laoreet id donec. Mi sit amet mauris commodo quis imperdiet massa. Turpis egestas integer eget aliquet nibh praesent tristique magna. Dui faucibus in ornare quam.Proin sed libero enim sed faucibus turpis in eu. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sit amet nisl purus in moll quam elementum pulvinar etiam non quam lacus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Non blandit massa enim nec dui nunc mattis enim ut. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Eu sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Id faucibus nisl tincidunt eget. Odio facilisis mauris sit amet massa vitae tortor condimentum.Eu sem integer vitae justo. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Pellentesque habitant morbi tristique senectus et netus et. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Risus quis varius quam quisque id diam vel quam elementum. Nibh nisl condimentum id venenatis a. Scelerisque felis imperdiet proin fermentum leo vel. Ultrices in iaculis nunc sed. Nulla posuere sollicitudin aliquam ultrices sagittis. Odio tempor orci dapibus ultrices. Vel fringilla est ullamcorper eget nulla facilisi. Non tellus orci ac auctor. Eu facilisis sed odio morbi quis."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "onecdiet proin fermentum.is egestas sed tempus urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Mattis pellentesque id nibh tortor id aliquet lectus. Interdum velit laoreet id donec. Mi sit amet mauris commodo quis imperdiet massa. Turpis egestas integer eget aliquet nibh praesent tristique magna. Dui faucibus in ornare quam.Proin sed libero enim sed faucibus turpis in eu. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sit amet nisl purus in moll quam elementum pulvinar etiam non quam lacus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Non blandit massa enim nec dui nunc mattis enim ut. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Eu sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Id faucibus nisl tincidunt eget. Odio facilisis mauris sit amet massa vitae tortor condimentum.Eu sem integer vitae justo. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Pellentesque habitant morbi tristique senectus et netus et. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Risus quis varius quam quisque id diam vel quam elementum. Nibh nisl condimentum id venenatis a. Scelerisque felis imperdiet proin fermentum leo vel. Ultrices in iaculis nunc sed. Nulla posuere sollicitudin aliquam ultrices sagittis. Odio tempor orci dapibus ultrices. Vel fringilla est ullamcorper eget nulla facilisi. Non tellus orci ac auctor. Eu facilisis sed odio morbi quis."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;