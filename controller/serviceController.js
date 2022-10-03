

module.exports.formData = async(req, res, next) => {
  try {
      const data = req.body
      console.log(data)
      
      return res.json(data)
  } catch (ex) {
      next(ex)
  }
}




