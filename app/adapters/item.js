import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');
    // record is the data we're passing it to make a new item
    let serialized = this.serialize(record, { includeId: true });
    let listId = serialized.list_id;
    let url = `${api}/lists/${listId}/items`;
    let data = { item: serialized };

    return this.ajax(url, 'POST', { data });
  },
});
