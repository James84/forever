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

var Forever = new keystone.List('Forever', {
	plural: 'Images',
	singular: 'Image',
});
 
Forever.add({
    title: { type: Types.Text, required: true, initial: true, index: true },
    description: { type: Types.Textarea, required: true, initial: true },    
    price: { type: Types.Money, required: true, initial: true, required: true, index: true },
    thumbnail: { type: Types.Url, required: true, initial: true, storage: thumbNailStore },
    image: { type: Types.Url, required: true, initial: true, storage: imageStore }
});

Forever.track = true; // automatically record who and when updated/created record
Forever.defaultColumns = 'title, description, price, thumbnail, image'; // set what to show in admin UI
Forever.defaultSort = 'updatedAt';

Forever.register();