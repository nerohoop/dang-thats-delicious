const slug = require('slugs');
const mongoose = require('mongoose');
// using built in promise
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
    tags: [String]
});

storeSchema.pre('save', function(next) {
    if (!this.isModified('name')) {
        return next();
    }
    this.slug = slug(this.name);
    next();
});

module.exports = mongoose.model('Store', storeSchema);