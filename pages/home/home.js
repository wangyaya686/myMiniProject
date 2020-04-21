// pages/home/home.js
Page({
  data: {
    name: 'yaya',
    age: 16,
    counter: 0
  },
  addNumber: function () {
    this.setData({
      counter: this.data.counter+1
    })
  },
  cutNumber: function () {
    this.setData({
      counter: this.data.counter-1
    })
  },
})