const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/list').then(res => {
  console.log('数据库连接成功')

})


// const Schema = mongoose.Schema
// const listSchema = new Schema (
//   {
//     name: {
//       type: String,
//       default:'xiaoming'
//     },
//     age: Number,
//     skills: {
//       type: String
//     }
//   },
//   { timestamps:true }
// )


// const List = mongoose.model('List', listSchema)

// export default List
