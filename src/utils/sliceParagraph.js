export const sliceParagraph = (para,characters) => {
    let new_para = para.substr(0,characters)
    return new_para.concat("...")
  }