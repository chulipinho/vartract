const createNewXmlContent = (originalFile, newData) => {
    let newContent = originalFile;
    
  Object.entries(newData).forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    
    newContent = newContent.replace(`[\\${key}]`, value);
  });
  
  return newContent;
};