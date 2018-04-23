const slug = require('slugs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema ({
    name: {
        type: String,
        trie: true,
        required: 'Please enter a store name',
    },
    slug: String,
    description: {
        type: String,
        trim: true,
    }, 
    tags: [Stirng]
});

storeSchema.pre('save', function(next) {
    this.slug = slug(this.name);
});

module.exports = mongoose.model('Store', storeSchema);