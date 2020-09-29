var app = new Vue({
  el: '#app',
  data: {
    // accumulator for items
    items: [],
    index0: [],
    index1: [],
    index2: [],
    index3: [],
    index4: [],
    index5: [],
    index6: [],
    index7: [],
    index8: [],
    index9: [],
    index10: [],
    index11: [],
    index12: []
  },
  mounted: function () {
    this.loadItems();
  },
  methods: {
    loadItems: function () {

      // Init variables
      var self = this
      var app_id = "app1aWRN0EWpI8tWF";
      var app_key = "keyk7NN2u4signpZI";
      this.items = []
      this.index0 = []
      this.index1 = []
      this.index2 = []
      this.index3 = []
      this.index4 = []
      this.index5 = []
      this.index6 = []
      this.index7 = []
      this.index8 = []
      this.index9 = []
      this.index10 = []
      this.index1 = []
      this.index12 = []
      axios.get(
        "https://api.airtable.com/v0/" + app_id + "/Imported%20table?view=Grid%20view", {
        headers: {
          Authorization: "Bearer " + app_key
        }
      }
      ).then(function (response) {
        // stores response data in items in a LIST of RECORDS which can now be accessed in html
        self.items = response.data.records
        self.index0 = [response.data.records[0]]
        self.index1 = [response.data.records[1]]
        self.index2 = [response.data.records[2]]
        self.index3 = [response.data.records[3]]
        self.index4 = [response.data.records[4]]
        self.index5 = [response.data.records[5]]
        self.index6 = [response.data.records[6]]
        self.index7 = [response.data.records[7]]
        self.index8 = [response.data.records[8]]
        self.index9 = [response.data.records[9]]
        self.index10 = [response.data.records[10]]
        self.index11 = [response.data.records[11]]
        self.index12 = [response.data.records[12]]

      }).catch(function (error) {
        console.log(error)
      })
    }
  }
})