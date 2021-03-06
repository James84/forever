var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
// adapter for local file storage
// this will need to be changed for production
var thumbNailStore = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('./public/images/thumbnails'),// required; path where the files should be stored
        publicPath: 'public/images/thumbnails'// path where files will be served
    }
});

var imageStore = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('./public/images/main'),// required; path where the files should be stored
        publicPath: 'public/images/main'// path where files will be served
    }
});

var Crafts = new keystone.List('Crafts');
 
Crafts.add({
    Title: { type: Types.Text, required: true, initial: true, index: true },
    Description: { type: Types.Textarea, required: true, initial: true },    
    Price: { type: Types.Money, required: true, initial: true, required: true, index: true },
    ThumbnailUrl: { type: Types.File, required: true, initial: true, storage: thumbNailStore },
    MainImageUrl: { type: Types.File, required: true, initial: true, storage: imageStore }
});

Crafts.track = true; // automatically record who and when updated/created record
Crafts.defaultColumns = 'title, description, price, thumbnail, image'; // set what to show in admin UI
Crafts.defaultSort = 'updatedAt';
Crafts.register();

/*

    Title: String,
    ThumbnailUrl: String,
    MainImageUrl: String,
    Price: String,
    Reference: String,
    ProductLink: String,
    Description: String
*/


/*
Boolean
Color
Date
Datetime
Email
Html
Key
Location
Markdown
Money
Name
Number
Password
Select
Text
Textarea
Url
AzureFile
CloudinaryImage
CloudinaryImages
Embedly
LocalFile
S3 File
*/