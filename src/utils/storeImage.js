const setImageBuffer = async (file) => {
  var fileObj = file
  var buffer = Buffer.from(await new Response(fileObj).arrayBuffer())
  var dataUrl = `data:${fileObj.type};base64,${buffer.toString("base64")}`
  return dataUrl
};

export default setImageBuffer