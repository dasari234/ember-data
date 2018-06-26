import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
// });
export default DS.RESTAdapter.extend({
    host: "https://jsonplaceholder.typicode.com",
    pathForType(){
        return "users"
    }
});